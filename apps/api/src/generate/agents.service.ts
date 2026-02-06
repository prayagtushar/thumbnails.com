import { Injectable } from '@nestjs/common';
import { ConsistencyAgent, StrategyAgent, VisualAgent } from '@repo/agents';

import { GeminiService } from '../gemini/gemini.service.js';
import { StorageService } from '../storage/storage.service.js';
import { GenerateDto } from './generate.dto.js';

@Injectable()
export class AgentsService {
	constructor(
		private readonly gemini: GeminiService,
		private readonly storage: StorageService,
	) {}

	async generate(dto: GenerateDto) {
		if (!dto.videoTitle || dto.videoTitle.length < 3) {
			throw new Error('Video title is required.');
		}

		if (!dto.referencePhotos || dto.referencePhotos.length < 1) {
			throw new Error('At least one reference photo is required.');
		}

		const strategy = new StrategyAgent();
		const consistency = new ConsistencyAgent();
		const visual = new VisualAgent(this.gemini);

		const concepts = strategy.suggestConcepts(dto.videoTitle, dto.niche);
		const persona = consistency.createPersona(dto.referencePhotos);

		const results = [];
		for (const concept of concepts) {
			results.push(await visual.generateAssets(concept, persona));
		}

		await this.storage.saveJob({
			videoTitle: dto.videoTitle,
			niche: dto.niche,
			referencePhotos: dto.referencePhotos,
			personaId: persona.personaId,
			concepts,
			results,
		});

		return { concepts, persona, results };
	}
}

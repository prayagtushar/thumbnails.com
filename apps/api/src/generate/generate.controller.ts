import { Body, Controller, Post } from '@nestjs/common';

import { GenerateDto } from './generate.dto.js';
import { AgentsService } from './agents.service.js';

@Controller('generate')
export class GenerateController {
	constructor(private readonly agents: AgentsService) {}

	@Post()
	async generate(@Body() dto: GenerateDto) {
		return this.agents.generate(dto);
	}
}

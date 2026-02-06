import { nanoid } from "nanoid";

export type Concept = {
  conceptId: string;
  vibe: string;
  layout: string;
  hookWords: string[];
  rationale: string;
};

export type Persona = {
  personaId: string;
  notes: string;
  photos: string[];
};

export type GenerationResult = {
  conceptId: string;
  backgroundUrl: string;
  assetsUrl: string;
  compositeUrl: string;
};

export type ImageGenerationRequest = {
  prompt: string;
  personaId: string;
  hookWords: string[];
};

export type ImageGenerator = {
  generate: (req: ImageGenerationRequest) => Promise<GenerationResult>;
};

export class StrategyAgent {
  suggestConcepts(title: string, niche?: string): Concept[] {
    const seed = nanoid(6);
    const hookWords = this.extractHookWords(title);
    const concepts: Concept[] = [
      {
        conceptId: `concept_${seed}_1`,
        vibe: "Surprised",
        layout: "Big face left, bold text right, arrow to focal object",
        hookWords,
        rationale: "High contrast and expressive emotion improves CTR."
      },
      {
        conceptId: `concept_${seed}_2`,
        vibe: "Urgent",
        layout: "Split screen: before/after with countdown badge",
        hookWords,
        rationale: "Urgency framing and visual comparison trigger curiosity."
      },
      {
        conceptId: `concept_${seed}_3`,
        vibe: "Mysterious",
        layout: "Silhouette center with glowing object, minimal text top",
        hookWords,
        rationale: "Mystery plus a single focal prop drives clicks."
      }
    ];

    if (niche) {
      return concepts.map((concept) => ({
        ...concept,
        rationale: `${concept.rationale} Niche context: ${niche}.`
      }));
    }

    return concepts;
  }

  private extractHookWords(title: string): string[] {
    const words = title.split(/\s+/).map((word) => word.replace(/[!?,.]/g, ""));
    const candidates = words.filter((word) => word.length >= 4);
    return candidates.length ? candidates.slice(0, 5) : words.slice(0, 3);
  }
}

export class ConsistencyAgent {
  createPersona(photos: string[]): Persona {
    return {
      personaId: `persona_${nanoid(8)}`,
      notes: "Persona manifest created.",
      photos
    };
  }
}

export class VisualAgent {
  constructor(private readonly generator: ImageGenerator) {}

  async generateAssets(concept: Concept, persona: Persona): Promise<GenerationResult> {
    return this.generator.generate({
      prompt: `${concept.vibe} thumbnail background, ${concept.layout}`,
      personaId: persona.personaId,
      hookWords: concept.hookWords
    });
  }
}

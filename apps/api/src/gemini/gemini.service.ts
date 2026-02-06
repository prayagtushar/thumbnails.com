import { Injectable } from "@nestjs/common";
import { ImageGenerationRequest, GenerationResult } from "@repo/agents";

@Injectable()
export class GeminiService {
  private readonly apiKey = process.env.GEMINI_API_KEY ?? "";
  private readonly endpoint =
    process.env.GEMINI_ENDPOINT ??
    "https://generativelanguage.googleapis.com/v1beta/models";
  private readonly model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";

  async generate(req: ImageGenerationRequest): Promise<GenerationResult> {
    if (!this.apiKey) {
      return this.mockResult(req);
    }

    const url = `${this.endpoint}/${this.model}:generateContent?key=${this.apiKey}`;
    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: [
                "Create a YouTube thumbnail background.",
                `Prompt: ${req.prompt}`,
                `Hook words: ${req.hookWords.join(", ")}`,
                `Persona: ${req.personaId}`
              ].join("\n")
            }
          ]
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return this.mockResult(req);
    }

    // Placeholder: parse your image generation response here.
    return this.mockResult(req);
  }

  private mockResult(req: ImageGenerationRequest): GenerationResult {
    const token = crypto.randomUUID();
    return {
      conceptId: req.personaId,
      backgroundUrl: `local://backgrounds/${req.personaId}/${token}.png`,
      assetsUrl: `local://assets/${req.personaId}/${token}.png`,
      compositeUrl: `local://composites/${req.personaId}/${token}.png`
    };
  }
}

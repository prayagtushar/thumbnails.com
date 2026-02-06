import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/db";

type SaveJobInput = {
  videoTitle: string;
  niche?: string;
  referencePhotos: string[];
  personaId: string;
  concepts: unknown;
  results: unknown;
};

@Injectable()
export class StorageService {
  async saveJob(input: SaveJobInput) {
    return prisma.thumbnailJob.create({
      data: {
        videoTitle: input.videoTitle,
        niche: input.niche,
        referenceSet: JSON.stringify(input.referencePhotos),
        personaId: input.personaId,
        concepts: JSON.stringify({
          concepts: input.concepts,
          results: input.results
        })
      }
    });
  }
}

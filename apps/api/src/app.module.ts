import { Module } from "@nestjs/common";

import { GenerateController } from "./generate/generate.controller.js";
import { AgentsService } from "./generate/agents.service.js";
import { GeminiService } from "./gemini/gemini.service.js";
import { StorageService } from "./storage/storage.service.js";

@Module({
  controllers: [GenerateController],
  providers: [AgentsService, GeminiService, StorageService]
})
export class AppModule {}

FROM oven/bun:1.1.0

WORKDIR /workspace

COPY package.json bun.lockb turbo.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages/agents/package.json packages/agents/package.json
COPY packages/db/package.json packages/db/package.json

RUN bun install

COPY . .

WORKDIR /workspace/apps/api

EXPOSE 4000

CMD ["bun", "dev"]

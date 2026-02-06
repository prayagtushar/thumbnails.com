FROM oven/bun:1.1.0

WORKDIR /workspace

COPY package.json bun.lockb turbo.json ./
COPY apps/web/package.json apps/web/package.json

RUN bun install

COPY . .

WORKDIR /workspace/apps/web

EXPOSE 3000

CMD ["bun", "dev"]

FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install turbo --global
COPY . .
RUN turbo prune api --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable
RUN pnpm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo build --filter=api...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

COPY --from=installer --chown=nestjs:nodejs /app/apps/api/dist ./dist
COPY --from=installer --chown=nestjs:nodejs /app/apps/api/package.json .
# Copy node_modules from installer (or prune for prod if needed, but for simplicity taking all prod deps)
# Getting only prod deps requires another install step, for now we copy what we have or could be optimized
# To properly get prod only node_modules:
# COPY --from=installer /app/node_modules ./node_modules
# But since it's a monorepo, node_modules might be hoisted.
# A safer bet for a robust monorepo dockerfile without complex hoisting logic is often to just copy the necessary parts.
# However, 'turbo prune' helps isolate.

# Let's try to keep it simple for now, assuming standard hoisting.
# Correct way for prod deps in monorepo often involves re-installing with --prod in a fresh dir.
# Updating to a more robust runner stage:

USER root
# Re-install prod deps only for the isolated slice
WORKDIR /app-prod
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable
RUN pnpm install --prod --frozen-lockfile

WORKDIR /app
USER nestjs
COPY --from=installer --chown=nestjs:nodejs /app/apps/api/dist ./dist
COPY --from=root /app-prod/node_modules ./node_modules

CMD node dist/main

FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ libc6-compat

RUN npm install -g pnpm

ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile --unsafe-perm --prod && \
    rm -rf /app/node_modules/.pnpm/better-sqlite3*

COPY . .

EXPOSE 1337

RUN pnpm run build

CMD ["pnpm", "run", "start"]
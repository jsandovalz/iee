FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ libc6-compat

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile --unsafe-perm

COPY . .

ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

# Variables necesarias para el build de Strapi
ARG APP_KEYS
ARG API_TOKEN_SALT
ARG ADMIN_JWT_SECRET
ARG JWT_SECRET
ARG DATABASE_URL

ENV APP_KEYS=$APP_KEYS
ENV API_TOKEN_SALT=$API_TOKEN_SALT
ENV ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET
ENV DATABASE_URL=$DATABASE_URL

EXPOSE 1337

RUN pnpm run build

CMD ["pnpm", "run", "start"]
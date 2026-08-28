FROM node:20.19.0-alpine AS build

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY index.html build-workers.mjs vite.config.ts vite.shared.mjs tsconfig.json LICENCE THIRD_PARTY_NOTICES.md ./
COPY shims ./shims
COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

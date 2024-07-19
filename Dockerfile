FROM node:18-alpine


WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm serve

RUN pnpm config set store-dir /app/.pnpm-store

RUN pnpm install

COPY . .


RUN pnpm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]

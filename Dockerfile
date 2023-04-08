FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci --omit=dev

RUN npm install @nestjs/cli

# RUN npm run build

ENV PORT 8080

EXPOSE 8080

CMD ["npm","run","start"]
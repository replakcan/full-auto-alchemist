FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

RUN apk add --no-cache wget

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
FROM node:lts-alpine
WORKDIR /xpense
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm", "run", "start:dev" ]
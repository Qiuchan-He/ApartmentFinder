FROM node:20.12.2-alpine3.18

COPY package.json package-lock.json ./
RUN npm install --force

COPY server/ .

EXPOSE 5566
CMD ["node", "index.js"]


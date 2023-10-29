FROM node:18-alpine
RUN apk update
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8000
CMD ["node", "server.js"]
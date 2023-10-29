FROM node:18-alpine AS build-env
RUN apk update
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM alpine
RUN apk update && apk add nginx
WORKDIR /app
COPY --from=build-env /app/build /app
COPY ./default.conf /etc/nginx/http.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

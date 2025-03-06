
# REACT

FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build


# NGINX

FROM nginx:stable-alpine

COPY ./build /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]
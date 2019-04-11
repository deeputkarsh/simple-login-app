FROM node:8-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN  npm i
COPY . ./
RUN npm run build
# VOLUME [ "/build" ]

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
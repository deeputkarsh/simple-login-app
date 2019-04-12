FROM node:8-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN  npm i
COPY . ./
# RUN npm run build

EXPOSE 3015
CMD [ "npm", "start" ]
# FROM nginx:alpine
# COPY --from=build-deps /usr/src/app/build /srv/www/static
# EXPOSE 8080
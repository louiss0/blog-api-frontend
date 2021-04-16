FROM node:15-alpine

WORKDIR /app

RUN npm install -g @vue/cli

ENTRYPOINT [ "vue" ]
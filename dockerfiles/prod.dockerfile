FROM node:15-alpine as prod 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

FROM nginx:mainline

COPY --from=prod /app/public/ /usr/share/ngnix/html

EXPOSE 80

CMD [ "nginx", "-g", "dameon off;" ]

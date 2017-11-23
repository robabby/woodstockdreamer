FROM node:carbon

ENV NODE_ENV production

RUN npm install -g ember-cli

RUN ["mkdir", "-p", "/usr/src/app"]

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

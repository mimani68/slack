FROM node:10-16.0-strech

WORKDIR /usr/src/app

COPY package.json .npmrc ./

USER node

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
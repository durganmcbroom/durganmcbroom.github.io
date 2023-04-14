FROM node:latest
WORKDIR /usr/src/app
COPY ./src ./src
COPY ./public ./public
COPY package*.json ./
RUN npm update
RUN npm install
RUN npm run build
EXPOSE 3000
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]


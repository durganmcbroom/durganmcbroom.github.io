FROM node:latest
WORKDIR /usr/src/app
COPY ./build ./build
EXPOSE 3000
RUN ls
RUN npm install -g serve
RUN serve -s build


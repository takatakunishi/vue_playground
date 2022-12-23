FROM node:16.14-slim
WORKDIR /usr/src/app
COPY ./front /usr/src/app/
COPY ./front/package*.json ./front/
RUN cd ./front && npm install
RUN apt update && apt install git -y
EXPOSE 3000
EXPOSE 3001
FROM node:20.18
WORKDIR /usr/src/app
COPY ./front /usr/src/app/
COPY ./front/package*.json ./front/
RUN cd ./front && npm install
RUN apt update && apt install git -y
EXPOSE 3999
# EXPOSE 3001
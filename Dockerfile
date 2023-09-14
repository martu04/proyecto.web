FROM node:16

ENV DB_HOST=localhost 
ENV DB_NAME=pasteleria
ENV DB_PASSWORD=280404
ENV DB_PORT=5432
ENV DB_USER=pasteleria

WORKDIR /usr/src/app

COPY package*.json . 
RUN npm install
COPY .  .

EXPOSE 3000

CMD ["npm" , "run" , "start"] 
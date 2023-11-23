FROM node:latest

WORKDIR /home/nodeapi

COPY package*.json ./ 

COPY . .

RUN npm install 

EXPOSE 6000

CMD ["node", "app.js"]


FROM node:20

COPY . /app
WORKDIR /app

RUN npm install 
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "start"]
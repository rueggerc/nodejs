# docker build -t restcrud1 .
# docker run --name restcrud1 -p 3000:3000 restcrud1
# docker container run restcrud1

FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 3000:3000

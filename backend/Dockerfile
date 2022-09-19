FROM node:lts-alpine
WORKDIR /app/backend
COPY package.json .
RUN npm i --prod
RUN npm i pm2 -g
COPY pm2-prod.json .
COPY server.js .
EXPOSE 80
CMD [ "pm2-runtime", "pm2-prod.json" ]
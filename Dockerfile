FROM nginx:alpine

COPY src/index.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

FROM nginx:alpine

COPY _nginx/default.conf /etc/nginx/conf.d/

COPY app/dist/* /usr/share/nginx/html/
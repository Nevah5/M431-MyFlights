FROM node AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine AS app

COPY --from=build /app/dist/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/*
COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
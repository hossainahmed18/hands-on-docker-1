
FROM node:16 as node
WORKDIR /app
COPY package.json .
COPY . ./
RUN npm install
RUN npm run build --prod

FROM nginx:1.21.6-alpine
WORKDIR /app
COPY --from=node app/dist/practice-app /usr/share/nginx/html

FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build
RUN yarn global add serve

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]

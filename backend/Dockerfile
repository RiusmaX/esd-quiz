FROM node:16
# Installing libvips-dev for sharp compatability
RUN apt-get update && apt-get install libvips-dev -y -qq > /dev/null
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/quiz/backend
COPY ./package.json ./
ENV PATH /usr/src/quiz/backend/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]
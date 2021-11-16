FROM node:14-buster-slim AS build

WORKDIR /usr/build

COPY tsconfig.json package*.json ./
COPY .npmrc .npmrc
RUN npm install
COPY src src
RUN npm run compile

# Multi stage build to remove unnecessary files
FROM node:14-buster-slim

WORKDIR /usr/src/app
COPY --from=build /usr/build/node_modules ./node_modules/
COPY --from=build /usr/build/dist ./dist/

# do not run as root
USER node
ENTRYPOINT [ "node", "dist/src" ]

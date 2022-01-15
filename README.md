# covidhelphub-backend

# Description:

Backend for the backend of the org app for Reach4Help

### To start:

Dependencies
- Copy .env.inttegration to .env 
- Before we forget! Create a new `.env` file in your root folder with the same content as our [integration](/.env.integration) file. This will be used by our integration tests once we have them.
- Install Docker
Because our backend needs to connect to stuff like a database, etc. You need to install [docker](https://www.docker.com/get-started) in order to start the project.
- Install Docker Compose 
- If you're using Mac or Windows you should be good to go, however, if you are using Linux, you must install [Docker Compose](https://docs.docker.com/compose/install/) (already included in the versions for Mac and Windows), a command line tool that builds on top of the Docker Engine and provides a series of useful commands that we are going to be using to start our project.
- Run Docker

Running the application
- Run `npm start`
- After the previous steps you should be able to run `npm start`, which in turn runs a simple [script](/scripts/start.sh) that aims to make this start up very easy to do.
- You can check we have two Dockerfiles that describe our service (`Dockerfile` and `Dockerfile.dev`). Our `start` is using `Dockerfile.dev` which supports hot reload and all that good stuff so we can develop with pleasure!

When the server starts have a go with the GraphQL playground at:

- `http://localhost:4000/`

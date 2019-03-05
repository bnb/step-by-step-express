# What have we done in this step

We've Dockerized!

The first step was adding a new npm script, `start`, which can be run to start our app via npm. We've added this as a tiny touch of developer expereince.

Next, we went ahead and created `Dockerfile` and `.dockerignore`. In the dockerfile we've scaffolded out an extremely basic setup:

**Dockerfile:**

- Use the latest Node.js LTS with Alpine Linux
- Create an application directory
- Copy over the `package.json` and `package-lock.json` from the current directory
- Run `npm ci` to install dependencies rapidly
- Copy the dependencies into the app directory
- Run `npm start`

**.dockerignore:**

- Ignore `node_modules`
- Ignore npm's debug file

Next, we'll _need_ to run a command to actually build the Docker image from the `Dockerfile`. To do this, run the following command after replacing `<YOUR_DOCKER_HUB_USERNAME>` with your [Docker Hub](https://hub.docker.com/) username:

```bash
docker build -t <YOUR_DOCKER_HUB_USERNAME>/step-by-step-express .
```

It's worth noting that `<YOUR_DOCKER_HUB_USERNAME>/step-by-step-express` can be any string – this is just the one I've decided to use personally, as it's more easily identifyable. You're not required to include your Docker Hub username nor the repo/project name, but this does seem to be the naming convention the Docker community has standardized on.

From there, we'll want to run the Docker image, publshing (`-p`) port 8080 and running it in detached mode (`-d`). You'll need to have Docker locally installed for this step!

```bash
docker run -p 8080:8080 -d <YOUR_DOCKER_HUB_USERNAME>/step-by-step-express
```

Next, you're going to want to publish this image to Docker Hub – this just requires a few steps:

```bash
docker login # log in with your Docker Hub credentials
```

```bash
docker push <YOUR_DOCKER_HUB_USERNAME>/step-by-step-express
```
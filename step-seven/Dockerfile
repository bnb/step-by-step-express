# Use LTS for stability and alpine for speed
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json 
# are copied
COPY package*.json ./

# This command uses package-lock.json to install dependencies rapidly
RUN npm ci --only=production

# Copy the deps to the app – helps reduce build time in conjunction w/ previous
# COPY command
COPY . .

# Run `npm start`, which will execute `node app.js` as defined in the `start` 
# script in `package.json`
CMD [ "npm", "start" ]

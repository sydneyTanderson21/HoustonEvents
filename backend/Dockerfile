FROM node:18.13-bullseye-slim as backend

WORKDIR /app

# Need to copy package.json and .lock file in order to use npm commands
COPY ./package.json .
COPY ./package-lock.json .

# To install the dependecies and packages used in our project, so we need to run npm install
RUN npm cache clean --force
RUN npm install

# Copy our project dir (locally) into the working directory
COPY ./ .

EXPOSE 5000
#CMD ["nodemon", "--exec", "npm", "start"]
# CMD npm start
CMD ["npm", "start"]
#CMD [ "npm", "run", "dev"]
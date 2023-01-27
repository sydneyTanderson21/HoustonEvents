# Stage 1 "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.13-bullseye-slim as build-stage

# Create application directory if it doesnt exist
RUN mkdir -p /app

# The WORKDIR sets the working directory for any instructions that follow it
# The /app directory will act as the main application directory
WORKDIR /app

# Need to copy package.json and .lock file in order to use npm commands
COPY package*.json /app/

# To install the dependecies and packages used in our project, so we need to run npm install
RUN npm install

# Copy our project dir (locally) into the working directory
# ./ /app/
COPY ./ /app/

# Build the app
RUN npm run build

# ==== RUN =======
# # Set the env to "production"
# ENV NODE_ENV production
# # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# EXPOSE 3000
# # Start the app
# CMD [ "npx", "serve", "build" ]

# Stage 2, create image with NGINX
FROM nginx:1.23.3

#Create and set a new working directory
WORKDIR /usr/share/nginx/html

# remove all default NGINX static resources
RUN rm -rf ./*

# copy the files generated in build-stage to directory
COPY --from=build-stage /app/build/ .

# Copy nginx configurations over
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 

# Instructions to run app inside container w/ Entrypoint
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# Stage 1 "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.13-bullseye-slim as build-stage
ENV NODE_ENV production

# Create application directory if it doesnt exist
RUN mkdir -p /app

# The WORKDIR sets the working directory for any instructions that follow it
# The /app directory will act as the main application directory
WORKDIR /app

# Need to copy package.json and .lock file in order to use npm commands
COPY ./package*.json /app

# To install the dependecies and packages used in our project, so we need to run npm install
RUN npm install

# Copy our project dir (locally) into the working directory
COPY ./ /app

# Build the app
RUN npm run build


# Stage 2, create image with NGINX
FROM nginx:1.23.3
ENV NODE_ENV production

#Create and set a new working directory
WORKDIR /usr/share/nginx/html

# remove all default NGINX static resources
RUN rm -rf ./*

# copy the files generated in build-stage to directory
COPY --from=build-stage /app/build/ .

#copy over sites-enabled configurations
# COPY --from=build-stage /app/nginx/sites-enabled/ /etc/nginx/sites-enabled

# Copy nginx configurations over

#FIX!!!!!!
#COPY --from=build-stage /app/nginx/dev/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

#EXPOSE 80 

# Instructions to run app inside container w/ Entrypoint
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

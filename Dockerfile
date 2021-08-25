# Create the node stage with the name "builder"
FROM node:latest as builder

# Set the working directory
WORKDIR /app

# Copy files from current directory to working directory
COPY . .

# Run npm install and build all assets
RUN npm i && npm run ng build

# Create the nginx stage for serving content
FROM nginx:alpine

# Set the working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage /// put your project name here
COPY --from=builder /app/dist/httpInterceptor .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


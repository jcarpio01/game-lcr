# Use an official Node.js runtime as a parent image
FROM node:16.14.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY src /app/src
COPY package.json yarn.lock tsconfig.json ./

# Install any necessary dependencies
RUN yarn install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["yarn", "start"]
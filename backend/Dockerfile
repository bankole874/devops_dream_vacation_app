# Node runtime
FROM node:14

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# The app binds to port 3000
EXPOSE 3000

# Serve the app
CMD ["node", "server.js"]

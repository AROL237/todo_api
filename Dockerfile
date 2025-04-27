# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the application source code
COPY . .

# Use a lightweight Node.js image for production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the production dependencies and built application from the builder stage
COPY --from=builder /app .

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["node", "index.js"]

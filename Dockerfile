# Stage 1: Build
FROM node:20-alpine AS builder

# Set working dir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

# Set working dir
WORKDIR /app

# Install a simple HTTP server to serve the built app
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json for reference
COPY package*.json ./

# Expose port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]
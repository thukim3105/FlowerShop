# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifest and install first (cached layer)
COPY package*.json ./
RUN npm ci --silent

# Copy source code
COPY . .

# Production build
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Install a static server for production
RUN npm install -g serve@14.2.0

# Copy build output
COPY --from=builder /app/dist ./dist

EXPOSE 3000
ENV NODE_ENV=production

CMD ["serve", "-s", "dist", "-l", "3000"]

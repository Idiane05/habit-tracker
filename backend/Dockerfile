# Stage 1: Build the TypeScript code
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

# Copy source files and compile
COPY ./src ./src
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine
WORKDIR /app

# Install only production deps
COPY package*.json ./
RUN npm install --only=production

# Copy compiled code from builder stage
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV PORT=5000

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["node", "dist/index.js"]


FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy backend source code
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

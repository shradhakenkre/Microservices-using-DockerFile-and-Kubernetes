# Inside both auth-service/Dockerfile and user-service/Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install express cors
CMD ["node", "index.js"]

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

#Pour run localement en utilise docker build -t react-hello . et docker run -p 5173:5173 reaact-hello  
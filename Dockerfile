FROM node:17-alpine
RUN npm install -g vite
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm install
EXPOSE 5137
CMD ["vite"]
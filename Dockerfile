# Указываем базовый образ для Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Экспонируем порт для приложения
EXPOSE 3001

# Запускаем сервер
CMD ["npm", "start"]

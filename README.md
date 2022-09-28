## React, Node, PostgreSQL - Практика

:black_small_square:

### Установка:

---

###### Server.
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
1. ```git clone https://github.com/rezervec/React-Node-Postgres_practice.git```
2. ```cd React-Node-Postgres_practice/server```
3. ```npm install```
4. Редактируем файл проекта ```server/db/db.js``` *или настраиваем БД под значения как у меня*:
- password: *"ваш пароль от Postgres"*
- port: *"ваш порт Postgres"*
- database: *"имя созданной БД"*
5. В ```url.js``` выбираем порт и домен, на котором будет открываться наше приложение, *у меня localhost:5000*.
6. ```npm start```

---

###### Открываем Postgres в PowerShell.
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
1. ```create database react_node_postgres;``` *('react_node_postgres' - название БД)*
2. ```\connect react_node_postgres;```
3. Открываем файл проекта ```server/db/db.sql``` - отправляем запрос на создание таблицы "rowTable"
4. ```\dt``` - проверяем создалась ли таблица
5. Из того же файла проекта ```db.sql``` берём запрос на добавление данных в таблицу
6. ```select * from rowTable;``` - проверяем (в таблице БД теперь 20 строк)

---

###### Client.
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
1. ```cd ../client```
2. ```npm install```
3. В файле проекта ```client/src/actions/request.js``` ставим домен сервера, на который будет делаться запрос, *у меня localhost:5000*.
4. ```npm start```

---

:black_small_square:

### Функционал:
---
- Сортировка таблицы по выбранной колонке: __Дата__ / __Название__ / __Количество__ / __Расстояние__
- Сортировать можно: __По убыванию__ / __По возрастанию__ / __Содержит__ / __Равно__ (*присутствует input*)
- __Пагинация__ и динамическое сокращение количества страниц
- Данные таблицы хранятся в __PostgreSQL__
- Таблица работает без перезагрузки страницы
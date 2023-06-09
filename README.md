***

# Node.JS

https://nodejs.org/ru

<br>

###### Стек для создания Бекенда:
1. `NodeJS / ES6`
2. `Express + Validator` (Веб-сервер + Валидация запросов)
3. `MongoDB / Mongoose` (Работа с БД)
4. `JSON Web Token` (Аутентификация / Авторизация)
5. `Multer` (Библиотека для загрузка файлов и изображений)
6. `BCrypt` (Библиотека для шифрования пароля)

<br>

###### Стек для создания Фронтенда:
1. `ReactJS v.18`
2. `Redux Toolkit` (Глобальный Стейт Менеджер, для реализации авторизации и хранения статей + тегов)
3. `React Hook Form` (Работа с формами)
4. `React Router v6` (Навигация/Роутинг по сайту)
5. `React Markdown / Simple editor` (Редактор статей / Рендер редактора для написания статей)
6. `Axios` (Отправка запросов на сервер)

<br>

###### Уроки:

1. https://youtu.be/GQ_pTmcXNrQ - MERN (4:24:12)

<br>

###### Терминология:

`NPM` - это NodeJS Packages Manager

`Стрелочная функция` - это функция, возвращающая ???

<br><br><br>

***

### Все разделы:

1. <a href="#Install">Install</a><br>
2. <a href="#UnInstall">UnInstall</a><br>
3. <a href="#Check version">Check version</a><br>
4. <a href="#Команды">Команды</a><br>
5. <a href="#Структура проекта">Структура проекта</a><br>
6. <a href="#Создание проекта">Создание проекта</a><br>
7. <a href="#Перенос настроек в .env">Перенос настроек в .env</a><br>
8. <a href="#Подключение JWT">Подключение JWT</a><br>
9. <a href="#Endpoints">Endpoints</a><br>
10. <a href="#Validators">Validators</a><br>


11. <a href="#Connect to MongoDB">Connect to MongoDB</a><br>
12. <a href="#Models for MongoDB">Models (for mongodb)</a><br>
13. <a href="#CRUD (for MongoDB)">CRUD (for MongoDB)</a><br>


14. <a href="#Connect to PostgreSQL">Connect to PostgreSQL</a><br>
15. <a href="#Models for PostgreSQL">Models (for postgresql)</a><br>
16. <a href="#CRUD (for PostgreSQL)">CRUD (for PostgreSQL)</a><br>


13. <a href="#Шифрование паролей">Шифрование паролей</a><br>
14. <a href="#Регистрация и Авторизация пользователей">Регистрация и Авторизация пользователей</a><br>
15. <a href="#Загрузка картинок (Express-Fileupload)">Загрузка картинок (Express-Fileupload)</a><br>
16. <a href="#Загрузка картинок (Multer)">Загрузка картинок (Multer)</a><br>
15. <a href="#Настройка статики">Настройка статики</a><br>
16. <a href="#CORS">CORS</a><br>
17. <a href="#QUERY параметры">QUERY параметры</a><br>
18. <a href="#XXX">XXX</a><br>
19. <a href="#XXX">XXX</a><br>
20. <a href="#XXX">XXX</a><br>

<br><br><br>

***

<a id="Install"></a>

### 1. Install

<br>

> https://nodejs.org/ru/download

<br><br>

Если нужно установить несколько версий NodeJS на один компьютер - необходимо выполнить следующие шаги:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | zsh
```

> nano ~/.zshrc
> ```
> export NVM_DIR="$HOME/.nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
> ```

<br>

```bash
nvm install 14.15.5
```

```bash
nvm install 18.16.0
```

<br>

```bash
nvm use 14.15.5
```

```bash
node -v
```

<br>

```bash
nvm use 18.16.0
```

```bash
node -v
```



<br><br><br>

***

<a id="UnInstall"></a>

### 2. UnInstall:

<br>

```bash
XXX
YYY
```

> XXX
> ```
> XXX
> ``` 

<br><br><br>

***

<a id="Check version"></a>

# 3. Check version

<br>

Проверить что Node.JS уже установлен, а так-же установлена утилита "NPM"

> Проверка версии Node.JS:
> ```
> node -v
> ```
> Пример ответа: `v18.16.0`

> Проверка версии NPM:
> ```
> npm -v
> ```
> Пример ответа: `9.5.1`

> Проверка всего установленного:
> ```
> npm list
> ```

<br><br><br>

***

<a id="Команды"></a>

# 4. Команды

<br>

> Открыть консоль разработки NodeJS
> ```
> node
> ```

<br>

> Запустить главный файл проекта
> ```
> node index.js
> ```
> После этого запускается локальный сервер по адресу - http://localhost:4444/

<br>

> Запуск сервера с использованием библиотеки Nodemon (с авто рестартом сервера)
> ```
> npm run start:dev
> ```
> Запуск сервера в стандартном режиме (без авто рестарта сервера)
> ```
> npm run start
> ```

<br><br><br>

***

<a id="Структура проекта"></a>

# 5. Структура проекта

<br>

`index.js` - Все приложение запускается именно с этого файла

`package.json`- Инструкция для всего пакета/модуля/программы/приложения ???

<br><br><br>

***

<a id="Создание проекта"></a>

# 6. Создание проекта

<br>

#### Для начала нужно создать файл `package.json`
> ```
> npm init
> npm init -y       (без задания вопросов "yes/no") 
> ```
> После запуска этой комманды просто со всем соглашаемся и постоянно нажимаем Enter

<br><br>

#### Далее устанавливаем библиотеку для создания веб-сервера с помощью NodeJS:

```bash
npm install express
```

#### Для обращения из браузера к серверу

```bash
npm install cors
```

#### Задание переменных окружения

```bash
npm install dotenv 
```

<br><br>

#### Далее необходимо разрешить использование модулей в проекте:
> nano package.json
> ```
> ...
> "main": "index.js",
> "type": "module",
>  ...
> ```

<br><br>

#### Далее можно установить библиотеку для автоматического рестарта веб-сервера, когда мы редактируем что-либо в файлах: 

```bash 
npm install nodemon
```

И далее настрим ёё:

> nano package.json
> ```
> ...
> "scripts": {
>     ...
>     "start": "node index.js",
>     "start:dev": "nodemon index.js"
>     ...
> },
> ...
> ```

И теперь после этого мы можем запускать проект следующими коммандами:

> Запуск сервера с использованием библиотеки Nodemon (с авто рестартом сервера)
> ```
> npm run start:dev
> ```
> Запуск сервера в стандартном режиме (без авто рестарта сервера)
> ```
> npm run start
> ```

<br><br>

#### Далее необходимо настроить возможность чтения JSON из запросов:

> nano index.js
> ```
> ...
> app.use(express.json());
> ...
> app.post('/auth/login', (req, res) => {
>     ...
>     console.log(req.body)
>     ...
> })
> ...
> ```
> В консоли мы получим например вот такой результат:<br>
> `{ email: 'test@test.com', password: '12345' }`

<br><br>

#### И в конце готовое рабочее приложение будет выглядеть вот так:

> Файл index.js
> ```
> import express from 'express';
> import jwt from 'jsonwebtoken';
> import mongoose from 'mongoose';
> 
> 
> const app = express();                      // Главное EXPRESS приложение
> app.use(express.json());                    // Разрешить читать JSON из запросов                  
> 
> 
> app.get('/', (req, res) => {                // Обработка GET запроса
>     res.send('Hello World');
> });
> 
> 
> app.post('/auth/login', (req, res) => {     // Обработка POST запроса
>     res.json({                              // Ответ в формате JSON
>         success: true,
>     })
> })
> 
> 
> app.listen(4444, (err) => {                 // Настройка веб сервера - Запустить приложение на порту `4444`
>     if (err) {return console.log(err)}      // Если наш сервер не смог запуститься - Вывести ошибку
>     console.log('Server OK');               // Если сервер запуститься - Вывести успешное сообщение
> });
> ```

<br>

###### Или вот второй вариант:

> Файл index.js
> ```
> const express = require('express');
> 
> const PORT = 5000;
> const app = express();
> 
> app.get('/', (req, res) => {                 // Обработка GET запроса
>     res.send('Hello World');
> });
> 
> app.listen(PORT, () => console.log(`Server started on port ${5000}`));
> ```

<br><br><br>

***

<a id="Перенос настроек в .env"></a>

# 7. Перенос настроек в .env

<br>

> nano .evn
> ```
> PORT=7000
> ```

> nano index.js
> ```
> require('dotenv').config()
> 
> const PORT = process.env.PORT || 6000;
> ```

<br><br><br>

***

<a id="Подключение JWT"></a>

# 7. Подключение JWT

<br>

Для начала необходимо установить библиотеку JsonWebToken
> npm install jsonwebtoken

Затем импортировать ее:
> nano index.js
> ```
> import jwt from 'jsonwebtoken';
> ```

<br>

А далее можно уже генерировать токены в необходимых местах:

```bash
const token = jwt.sign({
    email: req.body.email,
    password: req.body.password,
    fullName: 'Вася Пупкин',
}, 'MySecret123', {                // Ключ шифрования
  expiresIn: '30d'                 // Срок жизни токена
});
```
Где ключ шифрования 'MySecret123' может быть любым. 

Сгенерированный токен имеет например вот такой вид:
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1IiwiZnVsbE5hbWUiOiLQktCw0YHRjyDQn9GD0L_QutC40L0iLCJpYXQiOjE2ODM1MzkwMTF9.sWssMF44eYToZirTDTURxzLk4oPgcR4t0ZO07uu39sQ`

<br>

А расшифровать данный токен можно следующим способом:
> console.log(jwt.decode(token))

Или на официальном сайте:
> https://jwt.io/

Вывод мы получим следующим:

```bash
{
    email: 'test@test.com',
    password: '12345',
    fullName: 'Вася Пупкин',
    iat: 1683539125
}
```

где `iat: 1683455157` - это дата генерации токена

<br><br><br>

***

<a id="Endpoints"></a>

# 8. Endpoints

<br>

> GET
> ```
> app.get('/', (req, res) => {
>     res.send('Hello World');
> });
> ```
> Сработает как только прийдет GET запрос на главное приложение `/`

<br>

> POST
> ```
> app.post('/auth/login', (req, res) => {
>     res.json({                              // Ответ в формате JSON
>         success: true,
>     })
> })
> ```

<br>

```bash
mkdir routes
```

> nano routes/index.js
> ```
> const Router = require('express')                 // Получаем Роутер из Экспресс
> const router = new Router()                       // Создаем объект Роутер
> 
> const userRouter = require('./userRouter')        // Импортируем роуты из файла "userRouter"
> const typeRouter = require('./typeRouter')        // Импортируем роуты из файла "typeRouter"
> const brandRouter = require('./brandRouter')      // Импортируем роуты из файла "brandRouter"
> const deviceRouter = require('./deviceRouter')    // Импортируем роуты из файла "deviceRouter"
> 
> router.use('/user', userRouter)
> router.use('/type', typeRouter)
> router.use('/brand', brandRouter)
> router.use('/device', deviceRouter)
> 
> module.exports = router                           // Экспортируем Роутер
> ```


> nano routes/userRouter.js
> ```
> const Router = require('express')
> const router = new Router()
> const userController = require('../controllers/userController')
> 
> router.post('/registration', userController.registration)
> router.post('/login', userController.login)
> router.get('/auth', userController.check)
> 
> module.exports = router
> ```


```bash
mkdir controllers
```


> nano controllers/userController.js
> ```
> class UserController {
>     async registration(req, res){
>         res.json({message: 'Its working !!!'})
>     }
>     async login(req, res){
>         res.json({message: 'Its working !!!'})
>     }
>     async check(req, res){
>         res.json({message: 'Its working !!!'})
>     }
> }
> 
> module.exports = new UserController()
> ```


> nano index.js
> ```
> ...
> 
> const router = require('./routes/index')
> 
> ...
> 
> app.use('/api', router)
> 
> ...
> ```

Теперь отправляем GET запрос на адрес `http://localhost:5000/api/user/auth` или просто переходим на этот URL из браузера и видим ответ:

> {"message": "Its working !!!"}

<br>


<br><br><br>

***

<a id="Validators"></a>

# 10. Validators

<br>

Для начала устанавливаем библиотеку валидатора:
> npm install express-validator

Далее создаем папку для хранения всех наших валидаций:
> mkdir validations

Далее создаем файл с валидатором:
> nano auth.js
> ```
> import { body } from 'express-validator'
> 
> export const registerValidation = [
>     body('email').isEmail(),                // Если в запросе будет именно Email тогда пропускаем дальше
>     body('password').isLength({min: 5}),    // Если длинна пароля минимум 5 символов тогда пропускаем дальше
>     body('fillName').isLength({min: 3}),    // Если длинна имени минимум 5 символов тогда пропускаем дальше
>     body('avatarUrl').optional().isURL,     // Опциональное (не обязательное поле), если в нем ссылка тогда пропускаем дальше
> ]
> ```
> 
> Или еще можно немного кастомизировать сообщения ошибок:
> ```
> export const registerValidation = [
>     body('email', 'Неверный формат почты').isEmail(),
>     body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
>     body('fullName', 'Укажите имя (минимум 3 символа)').isLength({min: 3}),
>     body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
> ]
> ```

И далее уже прикручиваем наш валидатор и тестируем POST запрос:
> nano index.js
> ```
> ...
> 
> import { validationResult } from 'express-validator'
> import { registerValidation } from './validations/auth.js'
> 
> ...
> 
> app.post('/auth/register', registerValidation, (req, res) => {
>     try {
> 
>         const errors = validationResult(req);
>         if (!errors.isEmpty()) {
>             return res.status(400).json(errors.array())
>         }
> 
>         ...
>     
>         res.json({success: true})
>     } catch (err) {
>         console.log(err);
>         res.status(500).json({message: 'Не удалось зарегистрироваться'})
>     }
> })
> ...
> ```

На этом этапе валидатор готов и работает!

<br>

### Все варианты валидаторов:


> isEmail
> ```
> body('email', 'Неверный формат почты').isEmail(),
> ```


> isURL
> ```
> body('avatarUrl', 'Неверная ссылка на аватарку').isURL(),
> ```


> isArray
> ```
> body('tags', 'Неверный формат тегов (укажите массив)').isArray(),
> ```


> isString
> ```
> body('imageUrl', 'Неверная ссылка на изображение').isString(),
> ```

<br>

Не обязательное поле описывается так `.optional()`:

> body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),

<br>

Min / Max количество символов описывается так `.isLength({min: 3})`:

> body('title', 'Введите заголовок статьи').isLength({min: 3}),

<br><br><br>

***

<a id="Connect to MongoDB"></a>

# 11. Connect to MongoDB

<br>

###### Создание новой Базы Данных на сервере:

Для начала необходимо зайти на официальный сайт `MongoDB` и пройти регистрацию по кнопке `Try Free`
> https://www.mongodb.com/

Далее мы попадаем в Панель администратора, где необходимо создать новую БД нажав на кнопку `Create`.

Далее выбрать бесплатный вариант БД `Shared` и выбрать месторасположение сервера, например `Frankfurt (eu-central-1)`.

После успешного создания БД нажимаем кнопку `Connect` и выбираем раздел `Connect to your application`.

В открывшемся окошке мы получаем нашу ссылку для подключения к Базе Данных, вроде этой: 

> mongodb+srv://ysstepanenko:<password>@cluster0.bf3vcbl.mongodb.net/?retryWrites=true&w=majority

<br><br>

###### Подключение БД к проекту:

А далее уже устанавливаем библиотеку "mongodb" командой `npm install mongodb` и библиотеку "mongoose" командой `npm install mongoose`.

Затем покдлючаем нашу MongoDB к проекту:

> nano index.js
> ```
> ...
> import mongoose from 'mongoose';
> ...
> mongoose
>     .connect('mongodb+srv://ysstepanenko:i7W2a1uNGhtpA6ba@cluster0.bf3vcbl.mongodb.net/test?retryWrites=true&w=majority')
>     .then(() => console.log('DB: ok'))
>     .catch((err) => console.log('DB: error', err)
> );
> ```
> Обратите внимание что, в нашу ссылку мы принудительно добавили название базы данных `test`. Таким образом мы можем написать вместо `test` любое новое название БД и она автоматически создастся при выполнении следующего запроса к БД.

<br><br>

###### Просмотр содержимого БД:

Для просмотра содержимого MongoDB можно например использовать программу `Mongodb Compass Community`
> https://www.mongodb.com/try/download/shell

Ну или просто настроить подключение в `PyCharm`

<br><br><br>

***

<a id="Models for MongoDB"></a>

# 9. Models for MongoDB

<br>

Для создания модели Пользователя выполняем следующие действия:

```bash
mkdir models
```

> nano models/User.js
> ```
> import mongoose from 'mongoose';
> 
> const UserSchema = new mongoose.Schema({
>     fullName: {
>         type: String,
>         required: true,
>     },
>     email: {
>         type: String,
>         required: true,
>         unique: true,
>     },
>     passwordHash: {
>         type: String,
>         required: true,
>     },
>     avatarUrl: String,  // Это поле не Объект, поэтому его нельзя сделать уникальным
> }, {
>     timestamps: true,   // Добавить дату создания и обновления данного объекта
> });
> 
> export default mongoose.model('User', UserSchema); 
> ```

Далее импортируем её в нужное место таким образом `import UserModel from './models/User.js'` 

<br><br>

###### Все возможные поля:

```
imageUrl:   String,                                           // НЕ обязательное поле
fullName:   { type: String, required: true, },                // Обязательное поле
email:      { type: String, required: true, unique: true, },  // Обязательное + Уникальное поле
tags:       { type: Array, default: [], },                    // Дефолтное значение
viewsCount: { type: Number, default: 0 },
user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },   // Создание связи с юзером (типа ForeignKey в Django)
```

<br><br><br>

***

<a id="CRUD (for MongoDB)"></a>

# 12. CRUD (for MongoDB)

<br>

### Получить запись из БД:

```
// With "findOne"
const user = await UserModel.findOne({ email: req.body.email });

// With "findById"
const user = await UserModel.findById(req.userId);
 
// Достать все статьи и связанных с ними юзеров
const posts = await PostModel.find().populate('user').exec();


```

<br><br>

### Создаем запись в БД:

```
...

import UserModel from './models/User.js'
 
...
 
app.post('/auth/register', registerValidation, async (req, res) => {

    ...

    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        passwordHash: hash,
    })

    const user = await doc.save();

    res.json({... user._doc})
})

...
``` 

Теперь отправляем POST запрос на адрес `http://localhost:4444/auth/register` со следующими данными:

```
{
    "email": "test@test.com",
    "password": "12345",
    "fullName": "Вася Пупкин",
    "avatarUrl": "https://xxx.ua/photo.jpg"
}
```

И у нас в БД создается новый пользователь.

Ответ на наш запрос мы получаем примерно следующим: 

```
{
    "user": {
        "fullName": "Вася Пупкин",
        "email": "test@test.com",
        "passwordHash": "$2b$10$.iZnGrNNGuC3k/mGNBeAA.72fnqw.ANmCF/rW3OXjCSVYahqk1/m6",
        "avatarUrl": "https://xxx.ua/photo.jpg",
        "_id": "645b594684c32a5ceec95806",
        "createdAt": "2023-05-10T08:43:50.269Z",
        "updatedAt": "2023-05-10T08:43:50.269Z",
        "__v": 0
    }
}
```
<br><br>

### Изменить запись в БД:
###### updateOne

```
try {
    const postId = req.params.id;

    await PostModel.updateOne(
        {
            _id: postId
        }, {
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        }
    )
    res.json({
        success: true
    })
} catch (err) {
    console.log(err);
    res.status(500).json({message: 'Не удалось обновить статью'})
}
```

<br><br>

### Удалить запись из БД:
###### findOneAndDelete

```
try {
    const postId = req.params.id;

    PostModel.findOneAndDelete({_id: postId})
        .then((result) => {
            if (result) {
                res.status(200).json({ message: 'Статья успешно удалена' });
            } else {
                res.status(404).json({ message: 'Статья не найдена' });
            }
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({message: 'Не удалось удалить статью'})
        })

} catch (err) {
    console.log(err);
    res.status(500).json({message: 'Не удалось получить статью'})
}
```

<br><br><br>

***

<a id="Connect to PostgreSQL"></a>

# 11. Connect to PostgreSQL

<br>

###### Установка библиотек:

```bash
npm install pg
```

```bash
npm install pg-hstore
```

<br>

###### Установка ORM для базы данных:

```bash
npm install sequelize
```

<br>

###### Конфигурирование БД:

> nano .env
> ```
> ...
> 
> DB_NAME=node_store
> DB_USER=postgres
> DB_PASSWORD=root
> DB_HOST=localhost
> DB_PORT=5432
> ```

> nano db.js
> ```
> // Де-структуризация, потому-что модуль большой, а нам нужен именно этот класс
> const {Sequelize} = require('sequelize')
> 
> // Экспортируем объект, который создаем из этого класса
> module.exports = new Sequelize(
>     process.env.DB_NAME,
>     process.env.DB_USER,
>     process.env.DB_PASSWORD,
>     {
>         dialect: 'postgres',
>         host: process.env.DB_HOST,
>         port: process.env.DB_PORT
>     }
> )
> ```

> nano index.js
> ```
> ...
> 
> const sequelize = require('./db')
> 
> await sequelize.authenticate()    // установка подключения к БД
> await sequelize.sync()            // Сверка состояния БД со схемой данных
> ```

<br><br><br>

***

<a id="Models for PostgreSQL"></a>

# 9. Models for PostgreSQL

<br>


```bash
mkdir models
```

> nano models/models.js
> ```
> const sequelize = require('../db');
> const { DataTypes } = require('sequelize');   // Для описания типов полей
> 
> const User = sequelize.define('user', {                                        // 'user' - Это название модели
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     email: {type: DataTypes.STRING, unique: true},
>     password: {type: DataTypes.STRING},
>     role: {type: DataTypes.STRING, defaultValue: "USER"},
> })
> 
> const Basket = sequelize.define('basket', {                                    // 'basket' - Это название модели
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
> })
> 
> const BasketDevice = sequelize.define('basket_device', {                       // 'basket_device' - Это название модели
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
> })
> 
> const Device = sequelize.define('device', {
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     name: {type: DataTypes.STRING, unique: true, allowNull: false},
>     price: {type: DataTypes.INTEGER, allowNull: false},
>     rating: {type: DataTypes.INTEGER, defaultValue: 0},
>     img: {type: DataTypes.STRING, allowNull: false},
> })
> 
> const Type = sequelize.define('type', {
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     name: {type: DataTypes.STRING, unique: true, allowNull: false},
> })
> 
> const Brand = sequelize.define('brand', {
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     name: {type: DataTypes.STRING, unique: true, allowNull: false},
> })
> 
> const Rating = sequelize.define('rating', {
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     rate: {type: DataTypes.INTEGER, allowNull: false},
> })
> 
> const DeviceInfo = sequelize.define('device_info', {
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
>     title: {type: DataTypes.STRING, allowNull: false},
>     description: {type: DataTypes.STRING, allowNull: false},
> })
> 
> const TypeBrand = sequelize.define('type_brand', {                             // Создание промежуточно таблицы для связи "ManyToMany"
>     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},      // Остальные поля связи создавать не нужно, их "sequelize" добавит сам
> })
> 
> User.hasOne(Basket)             // Связь "Один к Одному"
> Basket.belongsTo(User)          // Сущность "Basket" принадлежит "User"
> 
> User.hasMany(Rating)            // Связь "Один ко Многим": Одна запись "User" содержит много записей "Rating"
> Rating.belongsTo(User)          // Сущность "Rating" принадлежит "User"
> 
> Basket.hasMany(BasketDevice)
> BasketDevice.belongsTo(Basket)
> 
> Type.hasMany(Device)
> Device.belongsTo(Type)
> 
> Brand.hasMany(Device)
> Device.belongsTo(Brand)
> 
> Device.hasMany(Rating)
> Rating.belongsTo(Device)
> 
> Device.hasMany(BasketDevice)
> BasketDevice.belongsTo(Device)
> 
> Device.hasMany(DeviceInfo)
> DeviceInfo.belongsTo(Device)
> 
> Type.belongsToMany(Brand, {through: TypeBrand})           // Связь "Многие ко Многим": Много записей "Type" содержат много записей "Brand"
> Brand.belongsToMany(Type, {through: TypeBrand})           // Связь "Многие ко Многим": Много записей "Brand" содержат много записей "Type"
> 
> module.exports = {                                        // Экспорт всех моделей для дальнейшей работы с ними из разных мест
>     User,
>     Basket,
>     BasketDevice,
>     Device,
>     Type,
>     Brand,
>     Rating,
>     TypeBrand,
>     DeviceInfo
> }
> ```

<br>

> nano models/models.js
> ```
> ...
> 
> const models = require('./models/models')
> 
> ...
> ```

<br><br>

###### Все возможные поля:

```
Integer...,
String...,
Image...,
OneToMany...,
ManyToMany...,
```

<br><br><br>

***

<a id="CRUD (for PostgreSQL)"></a>

# 12. CRUD (for PostgreSQL)

<br>

### Получить все записи из БД:

```
// findAll
const brands = await Brand.findAll()
```

### Получить одну запись из БД:

```
// findOne
const {id} = req.params;
const device = await Device.findOne({
    where: {id: id}
})        
```

<br>

### Создать запись в БД:

```
const brand = await Brand.create({name})
```

```
const uuid = require('uuid')
const path = require('path')

const {img} = req.files;
let fileName = uuid.v4() + ".jpg"
img.mv(path.resolve(__dirname, '..', 'static', fileName))               // Переместить файл картинки в папку статики

const device = await Device.create({name, price, brandId, typeId, img: fileName})
```

<br><br><br>

***

<a id="Шифрование паролей"></a>

# 13. Шифрование паролей

<br>
Для начала устанавливаем библиотеку:

> npm install bcrypt

И далее импортируем и настраиваем шифрование:

> nano index.js
> ```
> ...
> 
> import bcrypt from 'bcrypt';
> 
> ...
> 
> app.post('/auth/register', registerValidation, async (req, res) => {
> 
>     ...
> 
>     const password = req.body.password;               // Получить пароль
>     const salt = await bcrypt.genSalt(10);            // Сгенерировать соль
>     const hash = await bcrypt.hash(password, salt)    // Создать Хеш пароля
> 
>     ...
> 
>                                                                                                                               })
> ``` 
> Обратите внимание! К ендпоинту мы добавили работу в режиме "async" и это позволило использовать библиотеку bcrypt в асинхронном режиме (await bcrypt).

В итоге мы получаем вместо открытого пароля `12345` зашифрованный: `$2b$10$kgcH9UR8OS140nDUArRq0.F946tV2dldDRgCmmhAdYVfCSWfTNflW` 

<br><br><br>

***

<a id="Регистрация и Авторизация пользователей"></a>

# 14. Регистрация и Авторизация пользователей

<br>

### Регистрация пользователей

```
...

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { registerValidation } from './validations/auth.js';
import UserModel from './models/User.js';

...

app.post('/auth/register', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'MySecret123', {
            expiresIn: '30d'
        });

        const { passwordHash, ...userData} = user._doc;     // При помощи Декструктуризации вытащить пароль (и дальше его просто не использовать)

        res.json({... userData, token})
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось зарегистрироваться'})
    }
})

...
```  

<br>

### Авторизация пользователей

```
...

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from './models/User.js';

...

app.post('/auth/login', async (req, res) => {
    try {


        // Достать из БД необходимого пользователя
        const user = await UserModel.findOne({ email: req.body.email });


        // Проверить, есть ли в БД данный пользователь. Если нет - выдать ошибку
        if (!user) {return res.status(404).json({message: 'Неверный логин или пароль'})}


        // Проверка на одинаковость паролей
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);


        // Если пароли не одинаковы - выдать ошибку
        if (!isValidPass) {return res.status(404).json({message: 'Неверный логин или пароль'})}


        // Создать токен со сроком действия на 7 дней
        const token = jwt.sign({
            _id: user._id
        }, 'MySecret123', {
            expiresIn: '7d'
        });


        // Извлечь из ответа хеш пароля, что-бы его случайно не передать в ответе
        const { passwordHash, ...userData} = user._doc;

        res.json({... userData, token})


    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось авторизоваться'})
    }
})
```

<br>

### Создание Middleware на проверку токена

```bash
mkdir utils
```

> nano utils/checkAuth.js
> ```
> import jwt from 'jsonwebtoken';
> 
> export default (req, res, next) => {
>     const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');      // следующая конструкция || '' возвращает STRING независимо от того есть ли токен в headers или нет.
> 
>     if (token) {
>         try {
>             const decoded = jwt.verify(token, 'MySecret123');
>             req.userId = decoded._id
>             next();
>         } catch (err) {
>             return res.status(403).json({
>             message: 'Токен не действителен'
>         })
>         }
>     } else {
>         return res.status(403).json({
>             message: 'JWT токен не предоставлен'
>         })
>     }
> }
> ```

> nano index.js
> ```
> 
> app.get('/auth/profile', checkAuth, async (req, res) => {   // Проверка на то, что "checkAuth" успешно отработает и будет выполнен "next()"
> 
>     const user = await UserModel.findById(req.userId);      // userId мы принудительно добавили в "req" в самом Middleware
>         
>     ...
> 
> })
> 
> ```

<br><br>

### Еще один пример Middleware `handleValidationErrors`:

> nano utils/handleValidationErrors.js
> ```
> import { validationResult } from "express-validator";
> 
> export default (req, res, next) => {
>     const errors = validationResult(req);
>     if (!errors.isEmpty()) {
>         return res.status(400).json(errors.array())
>     }
>     next();
> }
> ```

> nano index.js
> ```
> ...
> 
> app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
> app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
> 
> ...
> ```

<br><br>

### Еще один пример Middleware `errorHandler`:

```bash
mkdir error
```

> nano error/ApiError.js
> ```
> class ApiError extends Error{                     // класс будет расширять Error
>     constructor(status, message) {                // Реализация конструктора с двумя параметрами
>         super();                                  // Вызываем родительский конструктор
>         this.status = status
>         this.message = message
>     }
> 
>     static forbiden(message) {                    // Создание статической функции
>         return new ApiError(403, message)         // Возвращаем новый объект ApiError
>     }
> 
>     static badRequest(message) {                  // Создание статической функции
>         return new ApiError(404, message)         // Возвращаем новый объект ApiError
>     }
> 
>     static internal(message) {                    // Создание статической функции
>         return new ApiError(500, message)         // Возвращаем новый объект ApiError
>     }
> }
> 
> module.exports = ApiError
> ```

```bash
mkdir middleware
```

> nano middleware/ErrorHandlingMiddleware.js
> ```
> const ApiError = require('../error/ApiError')
> 
> module.exports = function (err, req, res, next) {                       // Экспорт функции Мидлевре, и должна принимать 4 обязательных параметра "Ошибка", "Запрос", "Ответ" и функцию "next" вызвав которую мы передадим управление следующему в цепочке Мидлвере
>     if (err instanceof ApiError) {                                      // Если класс ошибки ApiError
>         return res.status(err.status).json({message: err.message})      // Тогда в клиент возвращаем ответ со статус-кодом из ошибки
>     }
>     return res.status(500).json({message: 'Непредвиденная ошибка'})     // Обработка ошибки если не ApiError
> }
> ```

> nano index.js
> ```
> ...
> 
> const errorHandler = require('./middleware/ErrorHandlingMiddleware')
> 
> ...
> 
> app.use(errorHandler)           // Внимание! middleware который работает с ошибками - обязательно должен идти и регистрироваться в самом конце.
>                                 // Так как он является замыкающим - именно по этому мы нигде внутри него не вызвали функцию NEXT, потому-что на нем работа прекращается
> ```

> nano controllers/userController.js
> ```
> ...
> 
> const ApiError = require('../error/ApiError')
> 
> ...
> 
> class UserController {
> 
>     ...
>
>     async check(req, res, next){
>         const query = req.query;
> 
>         if (!id) {
>             return next(ApiError.badRequest('Не задан ID'))
>         }
> 
>         res.json(query)
>     }
> 
>     ....
> 
> }
> ```

Теперь отправляем GET запрос на адрес `http://localhost:5000/api/user/auth?message=Hello` или просто переходим на этот URL из браузера и видим ответ:

> {"message":"Не задан ID"}

А если отправим GET запрос на адрес `http://localhost:5000/api/user/auth?id=123&message=Hello` то увидим что все нормально:

> {"id":"123","message":"Hello"}

<br><br><br>

***

<a id="Загрузка картинок (Express-Fileupload)"></a>

# 15. Загрузка картинок (Express-Fileupload)

<br>

```bash
npm install express-fileupload
```

> nano index.js
> ```
> ...
> 
> const fileUpload = require('express-fileupload')
> 
> ...
> 
> app.use(fileUpload({})) // Регистрация бибилиотеки
> 
> ...
> ```

```bash
npm install uuid
```

```
const uuid = require('uuid')
const path = require('path')

const {img} = req.files;
let fileName = uuid.v4() + ".jpg"
img.mv(path.resolve(__dirname, '..', 'static', fileName))               // Переместить файл картинки в папку статики

const device = await Device.create({name, price, brandId, typeId, img: fileName})
```

```bash
mkdir static
```

<br><br><br>

***

<a id="Загрузка картинок (Multer)"></a>

# 15. Загрузка картинок (Multer)

<br>

```bash
npm install multer
```

```bash
mkdir uploads
```

> nano index.js
> ```
> import multer from 'multer';
> 
> ...
> 
> const storage = multer.diskStorage({
>     destination: (_, __, cb) => {
>         cb(null, 'uploads')               // Null - означает что функция не получает никаких ошибок. 'uploads' - название папки для загрузки картинок
>     },
>     filename: (_, file, cb) => {
>         cb(null, file.originalname)       // file.originalname - означает что нужно достать из файла оригинальное название
>     },
> })
> const upload = multer({ storage })        // Подключить хранилище к Multer
> 
> ...
> 
> app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
>     res.json({
>         url: `/uploads/${req.file.originalname}`
>     });
> });
> ```

И далее отправляем POST запрос на адрес `http://localhost:4444/upload` и в body передаем картинку.

Ответ от бека получаем примерно следующим:

```
{
    "url": "/uploads/Screenshot-2023-05-09.png"
}
```

<br><br><br>

***

<a id="Настройка статики"></a>

# 15. Настройка статики

<br>

###### Настройка доступа к папке "static" - Вариант №1:

> app.use('/uploads', express.static('uploads'))

Если приходит запрос на "uploads" - тогда из библиотеки "express" взять функцию "static" и перенаправить в папку "uploads" а далее уже в ней искать файл.

После этого ссылка на нашу картинку `http://localhost:4444/uploads/Screenshot-2023-05-09.png` уже будет работать.

<br><br>

###### Настройка доступа к папке "static" - Вариант №2:

```
const path = require('path')

...

app.use(express.static(path.resolve(__dirname, 'static')))
```

После этого ссылка на нашу картинку `http://localhost:4444/Screenshot-2023-05-09.png` уже будет работать.

<br><br><br>

***

<a id="CORS"></a>

# 16. CORS

<br>

```bash
npm install cors
```

> nano index.js
> ```
> const cors = require('cors')
> 
> ...
> 
> // Настройка CORS для отправки запросов из браузера
> app.use(cors())
> ``` 

<br><br><br>

***

<a id="QUERY параметры"></a>

# 17. QUERY параметры

<br>

> nano index.js
> ```
> app.get('/', (req, res) => {
>     const query = req.query;
> 
>     const {id} = req.query;         // Вытащить ID при помощи деструктуризации
>     const {message} = req.query;    // Вытащить Message при помощи деструктуризации
>     console.log(id)
>     console.log(message)
>     
>     res.json(query)
> }
> ``` 

Теперь отправляем GET запрос на адрес `http://localhost:5000/?id=123&message=Hello` или просто переходим на этот URL из браузера и видим ответ:

> {"id":"123","message":"Hello"}

<br><br><br>

***

<a id="XXX"></a>

# 18. XXX

<br>

```bash
XXX
YYY
```

> XXX
> ```
> XXX
> ``` 

<br><br><br>

***

<a id="XXX"></a>

# 19. XXX

<br>

```bash
XXX
YYY
```

> XXX
> ```
> XXX
> ``` 

<br><br><br>

***

<a id="XXX"></a>

# 20. XXX

<br>

```bash
XXX
YYY
```

> XXX
> ```
> XXX
> ``` 

<br><br><br>

***

<a id="XXX"></a>

# 99. XXX

<br>

######  Разные варианты импорта:

> import { register, login, profile } from './controllers/UserController.js'

> import * as UserController from './controllers/UserController.js'

```bash
XXX
YYY
```

> XXX
> ```
> XXX
> ``` 

<br><br><br>

***

https://github.com/stepanenko-ys/example_nodejs
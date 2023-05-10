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
7. <a href="#Подключение JWT">Подключение JWT</a><br>
8. <a href="#Endpoints">Endpoints</a><br>
9. <a href="#Models">Models</a><br>
10. <a href="#Validators">Validators</a><br>
11. <a href="#Connect MongoDB">Connect MongoDB</a><br>
12. <a href="#DB - CRUD">DB - CRUD</a><br>
13. <a href="#Шифрование паролей">Шифрование паролей</a><br>
14. <a href="#XXX">XXX</a><br>
15. <a href="#XXX">XXX</a><br>

<br><br><br>

***

<a id="Install"></a>
### 1. Install

<br>

> https://nodejs.org/ru/download

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
### 3. Check version

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
### 4. Команды

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

### 5. Структура проекта

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
> ```
> После запуска этой комманды просто со всем соглашаемся и постоянно нажимаем Enter

<br><br>

#### Далее устанавливаем библиотеку для создания веб-сервера с помощью NodeJS:
> npm install express

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
> npm install nodemon

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
}, 'MySecret123');
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
### 8. Endpoints

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

<br><br><br>

***

<a id="Models"></a>
### 9. Models

<br>

Для создания модели Пользователя выполняем следующие действия:

> mkdir models

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

<br><br><br>

***

<a id="Validators"></a>
### 10. Validators

<br>

Для начала устанавливаем библиотеку валидатора:
> npm install express-validator

Далее создаем папку для хранения всех наших валидаций:
> mkdir validations

Далее созлаем файл с валидатором:
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
> import { validationResult } from 'express-validator'
> import { registerValidation } from './validations/auth.js'
> 
> ...
> app.post('/auth/register', registerValidation, (req, res) => {
> 
>     const errors = validationResult(req);
>     if (!errors.isEmpty()) {
>         return res.status(400).json(errors.array())
>     }
>     
>     res.json({success: true})
> })
> ...
> ```

<br><br><br>

***

<a id="Connect MongoDB"></a>
### 11. Connect MongoDB

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

<a id="DB - CRUD"></a>
### 12. DB - CRUD

<br>

> nano index.js
> ```
> ...
> 
> import UserModel from './models/User.js'
> 
> ...
> 
> app.post('/auth/register', registerValidation, async (req, res) => {
> 
>     ...
> 
>     passwordHash = ...
> 
>     const doc = new UserModel({
>         email: req.body.email,
>         fullName: req.body.fullName,
>         avatarUrl: req.body.avatarUrl,
>         passwordHash,
>     })
> 
>     const user = await doc.save();
> 
>     res.json({user})
> })
> 
> ...
> ``` 

Теперь отправляем POST запрос на адрес `http://localhost:4444/auth/register` со следующими данными:

```bash
{
    "email": "test@test.com",
    "password": "12345",
    "fullName": "Вася Пупкин",
    "avatarUrl": "https://xxx.ua/photo.jpg"
}
```

И у нас в БД создается новый пользователь.

Ответ на наш запрос мы получаем примерно следующим: 

```bash
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

<br><br><br>

***

<a id="Шифрование паролей"></a>
### 12. Шифрование паролей

<br>
Для начала устанавливаем библиотеку:

> npm install bcrypt

И далее импортируем и настраиваем шифрование:

> nano index.js
> ```
> ...
> import bcrypt from 'bcrypt';
> ...
> app.post('/auth/register', registerValidation, async (req, res) => {
>     ...
>     const password = req.body.password;
>     const salt = await bcrypt.genSalt(10);
>     const passwordHash = await bcrypt.hash(password, salt) 
>     ...
> })
> ``` 
> Обратите внимание! К ендпоинту мы добавили работу в режиме "async" и это позволило использовать библиотеку bcrypt в асинхронном режиме (await bcrypt).

В итоге мы получаем вместо открытого пароля `12345` зашифрованный: `$2b$10$kgcH9UR8OS140nDUArRq0.F946tV2dldDRgCmmhAdYVfCSWfTNflW` 

<br><br><br>

***

<a id="XXX"></a>
### 13. XXX

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
### 14. XXX

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
### 15. XXX

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
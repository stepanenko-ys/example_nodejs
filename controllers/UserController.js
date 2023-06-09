import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

    try {

        const password = req.body.password;                         // Получить пароль
        const salt = await bcrypt.genSalt(10);     // Сгенерировать соль
        const hash = await bcrypt.hash(password, salt)              // Создать Хеш пароля

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
}

export const login = async (req, res) => {
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

        // res.json({... userData, token})
        res.json({token})

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось авторизоваться'})
    }
}

export const profile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({message: 'Пользователь не найден'})
        } else {
            const { passwordHash, ...userData} = user._doc;

            res.json({... userData})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить профиль'})
    }
}
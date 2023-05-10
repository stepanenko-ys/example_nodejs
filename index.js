import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator'
import { registerValidation } from './validations/auth.js'
import UserModel from './models/User.js'

mongoose
    .connect('mongodb+srv://ysstepanenko:i7W2a1uNGhtpA6ba@cluster0.bf3vcbl.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('DB: ok'))
    .catch((err) => console.log('DB: error', err)
);

const app = express();
app.use(express.json());


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


app.listen(4444, (err) => {
    if (err) {return console.log(err)}
    console.log('Server OK');
});

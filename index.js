import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js'
// import { register, login, profile } from './controllers/UserController.js'
import * as UserController from './controllers/UserController.js'

mongoose
    .connect('mongodb+srv://ysstepanenko:i7W2a1uNGhtpA6ba@cluster0.bf3vcbl.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('DB: ok'))
    .catch((err) => console.log('DB: error', err)
);

const app = express();
app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/profile', checkAuth, UserController.profile)


app.listen(4444, (err) => {
    if (err) {return console.log(err)}
    console.log('Server OK');
});
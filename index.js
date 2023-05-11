import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { registerValidation, loginValidation, postCreateValidation } from "./validations/index.js";
import { checkAuth, handleValidationErrors } from './utils/index.js'
import { UserController, PostController } from './controllers/index.js'

mongoose
    .connect('mongodb+srv://ysstepanenko:i7W2a1uNGhtpA6ba@cluster0.bf3vcbl.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('DB: ok'))
    .catch((err) => console.log('DB: error', err)
);

const app = express();
const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')                         // Null - означает что функция не получает никаких ошибок. 'uploads' - название папки для загрузки картинок
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)                 // file.originalname - означает что нужно достать из файла оригинальное название
    },
})
const upload = multer({ storage })
app.use('/uploads', express.static('uploads'))

app.use(express.json());

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.get('/auth/profile', checkAuth, UserController.profile)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    });
});

app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.create)
app.patch('/posts/:id', checkAuth, postCreateValidation, handleValidationErrors, PostController.update)
app.delete('/posts/:id', checkAuth, PostController.remove)

app.listen(4444, (err) => {
    if (err) {return console.log(err)}
    console.log('Server OK');
});
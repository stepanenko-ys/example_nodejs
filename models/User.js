import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,  // Это поле не Объект, поэтому его нельзя сделать уникальным
}, {
    timestamps: true,   // Добавить дату создания и обновления данного объекта
});

export default mongoose.model('User', UserSchema);
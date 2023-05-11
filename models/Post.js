import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: [],                                // Дефолтное значение
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,       // Создание связи с юзером (типа ForeignKey в Django)
        ref: 'User',
        required: true
    },
    imageUrl: String,
}, {
    timestamps: true,
});

export default mongoose.model('Post', PostSchema);
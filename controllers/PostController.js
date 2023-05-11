import PostModel from '../models/Post.js'


export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();
        res.json(posts)
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить статьи'})
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        // PostModel.findOneAndUpdate(
        //     {
        //         _id: postId,
        //     },
        //     {
        //         $inc: { viewsCount: 1 },         // Инкрементировать количество просмотров стати на +1
        //     },
        //     {
        //         returnDocument: 'after',         // Вернуть документ уже после обновления
        //     },
        //     (err, doc) => {
        //         console.log('>>>>>>>')
        //         if (err) {
        //             console.log(err);
        //             return res.status(500).json({message: 'Не удалось получить статью'})
        //         }
        //
        //         if (!doc) {
        //             return res.status(404).json({message: 'Статья не найдена'})
        //         }
        //
        //         res.json(doc);
        //     }
        // );

        // Можно вернуть и таким образом если нам не нужно её инкрементировать
        const post = await PostModel.findById(postId);
        res.json(post)

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить статью'})
    }
}


export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        })

        const post = await doc.save();

        res.json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось создать статью'})
    }
}

export const update = async (req, res) => {
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
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

        // PostModel.findOneAndDelete({
        //     _id: postId
        // }, (err, doc) =>{
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).json({message: 'Не удалось удалить статью'})
        //     }
        //     if (!doc) {
        //         return res.status(404).json({message: 'Статья не найдена'})
        //     }
        // })

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
}
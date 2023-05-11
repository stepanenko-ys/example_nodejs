import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');      // следующая конструкция || '' возвращает STRING независимо от того есть ли токен в headers или нет.

    if (token) {
        try {
            const decoded = jwt.verify(token, 'MySecret123');
            req.userId = decoded._id
            next();
        } catch (err) {
            return res.status(403).json({
            message: 'Токен не действителен'
        })
        }
    } else {
        return res.status(403).json({
            message: 'JWT токен не предоставлен'
        })
    }
}

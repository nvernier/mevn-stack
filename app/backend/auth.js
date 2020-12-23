const JWT = require('jsonwebtoken')


const jwtKey = process.env.APP_SECRET || 'secret keyphrase'
const jwtExpiresInSeconds = 300

function generateAuthenticationToken(data) {
    const token = JWT.sign(
        { username: data.user.username },
        jwtKey,
        { algorithm: "HS256", expiresIn: jwtExpiresInSeconds }
    )
    return token
}

function ensureAuthenticated(req, res, next) {
    try {
        const token = req.headers.authorization.replace('Bearer ', '')
        const decoded = JWT.verify(token, jwtKey)
        req.userData = decoded
        next()
    } catch(err) {
        console.log(err)
        return res.status(401).json({ message: 'Authentication Failed' })
    }
}

module.exports = {
    ensureAuthenticated, generateAuthenticationToken
}

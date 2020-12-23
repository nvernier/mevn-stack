const User = require('../models/User')
const bcrypt = require('bcrypt')
const { generateAuthenticationToken } = require('../auth')

async function register(req, res) {
    const username = req.body.user.username
    const password = req.body.user.password

    const dbUser = await User.find({ username })
    if (dbUser.length > 0) {
        return res.status(409).json({ message: 'Username already registered' })
    }

    const nSaltRounds = 10
    const hash = await bcrypt.hash(password, nSaltRounds)

    const user = new User({ username, password: hash })
    await user.save()

    const payload = { user: { username } }
    const token = generateAuthenticationToken(payload)

    return res.status(200).json({ message: 'Successfully Registered', token })
}

async function login(req, res) {
    const username = req.body.user.username
    const password = req.body.user.password

    const dbUser = await User.findOne({ username })
    if (!dbUser) {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }
    const validPassword = await bcrypt.compare(password, dbUser.password)
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }

    const payload = { user: { username } }
    const token = generateAuthenticationToken(payload)
    return res.status(200).json({ message: 'Valid Credentials', token })
}

module.exports = { register, login }

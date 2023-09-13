const client = require('./client')
const { createUser, getAllUsers, getUserById } = require('../db/helper/users')

const router = require ('express'). Router()

//tester route/ root route
router.get('/', async (req, res, next) => {
    try {
        res.send('Testing this route if it works')
    } catch (error) {
        next(error)
    }
})

module.exports = router
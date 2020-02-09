const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcryptjs')
const {jwtSecret} = require('../config')
const jwt = require('jsonwebtoken')

// Route  POST /users
// Descr  Post user
// Access Public

router.post('/', (req, res) => {
    const {name, email, password} = req.body
    //  Simple validation

    if (!name || !email || !password) {
        return res.status(400).json({msg: "Please enter all filds"})
    }

    Users.findOne({email})
        .then(user => {
            if (user) return res.status(400).json({msg: 'User already exists'})

            const newUser = new Users({
                name,
                email,
                password
            })

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                {id: user.id},
                                jwtSecret,
                                {expiresIn: 3600},
                                (err, token) => {
                                    if (err) throw err

                                    res.json({
                                        status: 201,
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email

                                        }
                                    })
                                }
                            )


                        })
                })
            })
        })
})

module.exports = router
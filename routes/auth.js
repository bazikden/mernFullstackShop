const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

// Route    POST /auth
// Descr    Auth user
// Access   Public

router.post('/', (req, res) => {
    const {email, password} = req.body

    // Validation
    if (!email, !password) return res.status(400).json({msg: "Enter all fields"})

    Users.findOne({email})
        .then(user => {
            if (!user) return res.status(400).json({msg: "User does not exists"})

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({msg: 'Invalid Creadentials'})

                    jwt.sign(
                        {id: user.id},
                        config.jwtSecret,
                        {expiresIn: 3600},
                        (err, token) => {
                            if (err) throw err
                            res.json({
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


module.exports = router
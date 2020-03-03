const userModel = require('../models/user')
const miscHelper = require('../helpers/helpers')
const { genSaltSync, compareSync, hashSync } = require('bcrypt-nodejs')
const { sign } = require('jsonwebtoken')

module.exports = {
    getUser: (req, res) => {
        userModel.getUsers().then(result => {
            miscHelper.response(res, result, 200, '')
        })
            .catch(err => console.log(err))
    },
    register: (req, res) => {
        const { email, password, username, address, phone } = req.body
        const data = {
            email,
            password,
            username,
            address,
            phone,
            role: 1,
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.register(data).then(result => {
            const data = {
                id: result.insertId,
                email,
                password,
                username,
                address,
                phone,
                role: 1,
            }
            miscHelper.response(res, data, 200)
        })
            .catch(err => {
                miscHelper.response(res, {}, 201, err)
                console.log(err)
            })
    },
    login: (req, res) => {
        const { email, password } = req.body
        const data = {
            email,
            password
        }
        userModel.login(data.email).then(result => {
            const data = {
                email,
                password
            }
            const results = compareSync(data.password, result.password)
            const id = result.id
            if (results) {
                result.password = undefined
                const jwt = sign({ id: result.id, role: result.role }, process.env.PRIVATE_KEY, { expiresIn: '3h' })
                return res.json({
                    success: 1,
                    message: 'Login Successfully',
                    token: jwt
                })
            } else {
                return res.json({
                    success: 0,
                    message: 'Invalid Password!!'
                })
            }
        })
            .catch(err => {
                return res.json({
                    success: 0, 
                    message: 'Invalid email, Please Register First!!!'
                })
                
            })
    },
    detailUser: (req, res) => {
        const id_users = req.params.id_users
        userModel.getUsersDetail(id_users).then(result => {
            // res.json(result)
            if (result.length <= 0) {
                miscHelper.response(res, {}, 201, 'User Not Found!')
            } else {
                miscHelper.response(res, result, 200, 'Success')
            }
        })
            .catch(err => console.log(err))
    },
    deleteUsers: (req, res) => {
        const id_users = req.params.id_users
        userModel.getUsersDetail(id_users).then(result => {
            if (result.length <= 0) {
                miscHelper.response(res, {}, 201, 'User Not Found!')
            } else {
                userModel.deleteUsers(id_users).then(results => {
                    miscHelper.response(res, results, 200, 'Deleting Success!')
                })
                    .catch(err => {
                        miscHelper.response(res, {}, 201, 'An Error Has Occured!')
                    })
            }
        })
            .catch(err => console.log(err))
    },
    editUsers: (req, res) => {
        const id_users = req.params.id_users
        const { password, username, address, phone } = req.body
        const data = {
            password,
            username,
            address,
            phone,
            image: process.env.URL_IMG + `uploads/user/${req.file.filename}`
        }
        const salt = genSaltSync(10)
        if (data.password === '' || data.password === undefined || data.password.length <= 5) {
            miscHelper.response(res, {}, 201, 'Password Required, and Min 6 Character!')
        } else if (data.username === '' || data.username === undefined || data.username.length <= 2) {
            miscHelper.response(res, {}, 201, 'Username Required, and Min 2 Character!')
        } else if (data.address === '' || data.address === undefined) {
            miscHelper.response(res, {}, 201, 'Address Required!')
        } else if (data.phone === '' || data.phone === undefined) {
            miscHelper.response(res, {}, 201, 'Phone Number Required')
        } else {
            data.password = hashSync(data.password, salt)
            userModel.editUsers(id_users, data).then(result => {
                const data = {
                    id: id_users,
                    password,
                    username,
                    address,
                    phone,
                    image: process.env.URL_IMG + `uploads/user/${req.file.filename}`
                }
                miscHelper.response(res, data, 200, 'Update User Info Success!')
            })
                .catch(err => {
                    miscHelper.response(res, {}, 201, 'An Error Has Occured!')
                })
        }
    },
    editPassword: (req, res) => {
        const id_users = req.params.id_users
        const { password } = req.body
        const data = {
            password
        }
        const salt = genSaltSync(10)
        if (data.password === '' || data.password === undefined || data.password.length <= 5) {
            miscHelper.response(res, {}, 201, 'Password Required, and Min 6 Character!')
        }else{
            data.password = hashSync(data.password, salt)
            userModel.editPassword(id_users, data.password).then(result => {
                const data = {
                    password
                }
                miscHelper.response(res, data, 200, 'Password Update Success!')
            })
            .catch(err => {
                miscHelper.response(res, {}, 201, 'An Error Has Occured!')
            })
        }
    }
}
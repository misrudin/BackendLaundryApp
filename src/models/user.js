const connection = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    register: data => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    checkEmail: email => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user.email FROM user WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    login: email => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
                if(!err){
                    resolve(result[0])
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    getUsersDetail: id => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editUsers: (id_users, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE id = ?', [data, id_users], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteUsers: id_users => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ?', id_users, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editPassword: (id_users, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET password = ? WHERE user.id = ?', [data, id_users], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
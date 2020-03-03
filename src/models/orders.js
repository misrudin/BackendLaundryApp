const connection = require('../configs/db');

module.exports = {
    getOrder: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM orders", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
      getById: (id,status) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT data_laundry.name, orders.* FROM data_laundry JOIN orders on data_laundry.id=orders.laundry_id WHERE orders.user_id=? and orders.status=?",[id,status], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    insertOrder: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO orders SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateOrder: (data, id) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE orders SET ? WHERE id = ?", [data, id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    deleteOrder: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM orders WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
};
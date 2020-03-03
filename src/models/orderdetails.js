const connection = require('../configs/db');

module.exports = {
    getOrderDetail: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM detail_orders", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }, 
    getOrderDetailById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT detail_orders.id,detail_orders.qty,detail_orders.price as total,features_laundry.name,features_laundry.price as hargaFeature,features_laundry.category FROM detail_orders JOIN features_laundry ON features_laundry.id=detail_orders.id_features WHERE detail_orders.id_orders=?",id, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    insertOrderDetail: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO detail_orders SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateOrderDetail: (data, id) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE detail_orders SET ? WHERE id = ?", [data, id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    deleteOrderDetail: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM detail_orders WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
};
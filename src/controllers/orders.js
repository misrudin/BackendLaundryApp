const orderModel = require('../models/orders');
const miscHelper = require('../helpers/helpers');
const bodyParser = require('body-parser');

module.exports = {
    getOrder: (req, res) => {
        const id=req.query.id
        const status=req.query.status
        if(id){
             orderModel.getById(id,status)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
        }else{
             orderModel.getOrder()
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
        }
       
    },
    insertOrder: (req, res) => {
        const { user_id, laundry_id, price } = req.body;
        const date = new Date();
        const data = {
            user_id,
            laundry_id,
            date,
            price,
            status:0,
        };
        orderModel.insertOrder(data)
            .then((result) => {
                const dataResponse = { id: result.insertId, ...data }
                miscHelper.response(res, dataResponse, 201);
            })
            .catch(err => console.log(err));
    },
    updateOrder: (req, res) => {
        const { user_id, laundry_id, date, price, status, date_done } = req.body;
        const data = {
            user_id,
            laundry_id,
            date,
            price,
            status,
            date_done,
        };
        const id = req.query.id;
        orderModel.updateOrder(data, id)
            .then((result) => {
                const dataResponse = {id, ...data}
                miscHelper.response(res, dataResponse, 200);
            })
            .catch(err => console.log(err));
    },
    deleteOrder: (req, res) => {
        const id = req.query.id;
        orderModel.deleteOrder(id)
            .then((result) => {
                miscHelper.response(res, id, 200);
            })
            .catch(err => console.log(err));
    },
};
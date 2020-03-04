const express = require("express");
const Router = express.Router();

const featuresController = require("../controllers/features");

Router.get("/", featuresController.getData);
Router.post("/", featuresController.insertData);
Router.patch("/", featuresController.editData);
Router.patch("/price", featuresController.editPrice);
Router.delete("/", featuresController.deleteData);

module.exports = Router;

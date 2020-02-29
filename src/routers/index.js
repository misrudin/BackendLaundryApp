const express = require("express");
const Router = express.Router();

const laundry = require("./laundry");
Router.use("/laundry", laundry);

// const features = require("./features");
// Router.use("/features", features);

module.exports = Router;

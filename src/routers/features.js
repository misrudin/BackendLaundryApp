const express = require("express");
const Router = express.Router();

const featuresController = require("../controllers/features");

Router.get("/", featuresController.getData);

module.exports = Router;

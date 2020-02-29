const featuresModel = require("../models/features");
const helpers = require("../helpers/helpers");
const conn = require("../configs/db");

module.exports = {
  getData: (req, res) => {
    featuresModel
      .getData()
      .then(result => {
        helpers.response(res, result, 200);
      })
      .catch(err => {
        helpers.response(res, {}, res.status, err);
      });
  }
};

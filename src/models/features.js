const connection = require("../configs/db");

module.exports = {
  getData: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM features_laundry", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};

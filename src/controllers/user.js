const userModel = require("../models/user");
const miscHelper = require("../helpers/helpers");
const { genSaltSync, hashSync } = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const connection = require("../configs/db");
const bcrypt = require("bcryptjs");

module.exports = {
  getUser: (req, res) => {
    const id = req.query.id;
    if (id) {
      userModel
        .getUsersDetail(id)
        .then(result => {
          if (result.length <= 0) {
            miscHelper.response(res, {}, 201, "User Not Found!");
          } else {
            miscHelper.response(res, result, 200, "Success");
          }
        })
        .catch(err => console.log(err));
    } else {
      userModel
        .getUsers()
        .then(result => {
          miscHelper.response(res, result, 200, "");
        })
        .catch(err => console.log(err));
    }
  },
  register: (req, res) => {
    const { email, password, username, address, phone } = req.body;
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        const data = {
          email,
          password: hash,
          username,
          address,
          phone,
          image: process.env.URL_IMG + `uploads/user/${req.file.filename}`,
          role: 1,
          point: 0
        };
        userModel
          .register(data)
          .then(result => {
            const data = {
              id: result.insertId,
              email,
              password: hash,
              username,
              address,
              phone,
              image: process.env.URL_IMG + `uploads/user/${req.file.filename}`,
              role: 1,
              point: 0
            };
            miscHelper.response(res, data, 200);
          })
          .catch(err => {
            miscHelper.response(res, {}, 201, err);
          });
      });
    });
  },
  login: (req, res) => {
    const email = req.body.email;
    connection.query(
      "SELECT * FROM user WHERE email = ?",
      email,
      (err, result) => {
        if (!err) {
          if (result.length > 0) {
            const passwordInput = req.body.password;
            const passwordHash = result[0].password;
            bcrypt.compare(passwordInput, passwordHash, function(err, resPass) {
              if (resPass) {
                const token = jwt.sign({ result }, process.env.PRIVATE_KEY);
                res.json({
                  id: result[0].id,
                  role: result[0].role,
                  token: token
                });
              } else {
                res.json({ msg: "Password Wrong!" });
              }
            });
          } else {
            res.json({ msg: "Username not found, please register!" });
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  deleteUsers: (req, res) => {
    const id_users = req.params.id_users;
    userModel
      .getUsersDetail(id_users)
      .then(result => {
        if (result.length <= 0) {
          miscHelper.response(res, {}, 201, "User Not Found!");
        } else {
          userModel
            .deleteUsers(id_users)
            .then(results => {
              miscHelper.response(res, results, 200, "Deleting Success!");
            })
            .catch(err => {
              miscHelper.response(res, {}, 201, "An Error Has Occured!");
            });
        }
      })
      .catch(err => console.log(err));
  },
  editUsers: (req, res) => {
    const id_users = req.params.id_users;
    const { password, username, address, phone } = req.body;
    const data = {
      password,
      username,
      address,
      phone,
      image: process.env.URL_IMG + `uploads/user/${req.file.filename}`
    };
    const salt = genSaltSync(10);
    if (
      data.password === "" ||
      data.password === undefined ||
      data.password.length <= 5
    ) {
      miscHelper.response(
        res,
        {},
        201,
        "Password Required, and Min 6 Character!"
      );
    } else if (
      data.username === "" ||
      data.username === undefined ||
      data.username.length <= 2
    ) {
      miscHelper.response(
        res,
        {},
        201,
        "Username Required, and Min 2 Character!"
      );
    } else if (data.address === "" || data.address === undefined) {
      miscHelper.response(res, {}, 201, "Address Required!");
    } else if (data.phone === "" || data.phone === undefined) {
      miscHelper.response(res, {}, 201, "Phone Number Required");
    } else {
      data.password = hashSync(data.password, salt);
      userModel
        .editUsers(id_users, data)
        .then(result => {
          const data = {
            id: id_users,
            password,
            username,
            address,
            phone,
            image: process.env.URL_IMG + `uploads/user/${req.file.filename}`
          };
          miscHelper.response(res, data, 200, "Update User Info Success!");
        })
        .catch(err => {
          miscHelper.response(res, {}, 201, "An Error Has Occured!");
        });
    }
  },
  editPassword: (req, res) => {
    const id_users = req.params.id_users;
    const { password } = req.body;
    const data = {
      password
    };
    const salt = genSaltSync(10);
    if (
      data.password === "" ||
      data.password === undefined ||
      data.password.length <= 5
    ) {
      miscHelper.response(
        res,
        {},
        201,
        "Password Required, and Min 6 Character!"
      );
    } else {
      data.password = hashSync(data.password, salt);
      userModel
        .editPassword(id_users, data.password)
        .then(result => {
          const data = {
            password
          };
          miscHelper.response(res, data, 200, "Password Update Success!");
        })
        .catch(err => {
          miscHelper.response(res, {}, 201, "An Error Has Occured!");
        });
    }
  }
};

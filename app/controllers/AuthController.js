const AdminDAO = require('../services/AdminDAO');
const createToken = require('../utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    AdminDAO.findBy({ email })
           .then((admin) => {
              if (!bcrypt.compareSync(password, admin.password)) {
                res.status(401).end();
              } else {
                req.session.currentAdmin = admin;
                const token = createToken(admin);
                res.cookie('token', token);
                res.status(200).json(admin);
              }
           })
           .catch((err) => {
              console.error(err);
              res.status(401).end();
           });
  }
  static signUp(req, res) {
    const email = req.body.email;
    let password = req.body.password;
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      AdminDAO.create({ email, password })
        .then((admin) => {
          req.session.currentAdmin = admin;
          const token = createToken(admin);
          res.cookie('token', token);
          res.status(200).json(admin);
        })
        .catch((err) => res.status(500).json(err));
    } else {
        res.status(400).end();
    }
  }
  static signOut(req, res) {
    req.session.currentAdmin = null;
    res.clearCookie('token');
    res.status(204).end();
  }
}

module.exports = AuthController;

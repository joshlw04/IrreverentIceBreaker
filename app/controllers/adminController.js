const AdminDAO = require('../services/AdminDAO');

class AdminController {
  static getAll(req, res) {
    AdminDAO.all().then((Admins) => {
      res.status(200).json(Admins);
    });
  }
  static getOne(req, res) {
    AdminDAO.findBy({ id: req.params.id })
           .then((Admin) => res.status(200).json(Admin));
  }
}

module.exports = AdminController;

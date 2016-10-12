const db = require('../config/db');
const sql = require('../config/sqlProvider').admins;
const Admin = require('../models/Admin');

class AdminDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Admin(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Admin(row));
  }
  static create({ email, password }) {
    return db.one(sql.create, [email, password])
             .then((row) => new Admin(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = AdminDAO;

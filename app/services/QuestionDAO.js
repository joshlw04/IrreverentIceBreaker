const db = require('../config/db');
const sql = require('../config/sqlProvider').questions;
const Question = require('../models/Question');

class QuestionDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Question(row));
  }
  static oneQuestionByType(type) {
    return db.one(sql.find, [type])
             .then((response) => new Question(response));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static create({ question, type, admin_email }) {
    return db.one(sql.create, [question, type, admin_email])
             .then((data) => new Question(data));
  }
  static update({ id, question, type, admin_email }) {
    return db.none(sql.update, [question, type, admin_email, id]);
  }
}

module.exports = QuestionDAO;

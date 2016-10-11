const db = require('../config/db');
const sql = require('../config/sqlProvider').questions;
const Question = require('../models/Question');

class QuestionDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Question(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static create({ question, type }) {
    return db.one(sql.create, [question, type])
             .then((data) => new Question(data));
  }
  static update({ id, question, type }) {
    return db.none(sql.update, [question, type, id]);
  }
}

class Questions {
  constructor({ id, question, type, admin_email }) {
    this.id = id;
    this.question = question;
    this.type = type;
    this.admin_email = admin_email;
  }
}

module.exports = Questions;

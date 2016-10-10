const QuestionsDAO = require('../services/QuestionsDAO');

class QuestionsController {
  static getAllQuestions(req, res) {
    QuestionsDAO.
  }

  static getRandomQuestion(req, res) {
  }
  static create(req, res) {
    const questionData = {
      question: req.body.question,
      type: req.body.type,
    }
    QuestionsDAO.create(questionData)
               .then((question) => res.status(200).json(question));
  }
  static put(req, res) {

  }
  static delete(req, res) {
    QuestionsDAO.delete(req.params.id)
                .then(() => res.status(204).end());
  }
}

module.exports = QuestionsController;

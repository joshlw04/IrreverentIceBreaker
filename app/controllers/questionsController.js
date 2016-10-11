const QuestionsDAO = require('../services/QuestionDAO');

class QuestionsController {
  static getAllQuestions(req, res) {
    QuestionDAO.all().then((questions) => {
      res.status(200).json(questions);
    });
  }
  // static getRandomQuestion(req, res) {
  // }
  static create(req, res) {
    const questionData = {
      question: req.body.question,
      type: req.body.type,
    };
    QuestionDAO.create(questionData)
               .then((question) => res.status(200).json(question));
  }
  static put(req, res) {
    const updateData = {
      question: req.body.question,
      type: req.body.type,
      id: req.body.id,
    };
    QuestionDAO.update(updateData)
               .then((response) => res.status(200).json(response));
  }
  static delete(req, res) {
    QuestionDAO.delete(req.params.id)
                .then(() => res.status(204).end());
  }
}

module.exports = QuestionsController;

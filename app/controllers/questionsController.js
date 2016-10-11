const QuestionDAO = require('../services/QuestionDAO');

class QuestionsController {
  static getAllQuestions(req, res) {
    QuestionDAO.all().then((questions) => {
      res.status(200).json(questions);
    });
  }
  static getRandomQuestion(req, res) {
    QuestionDAO.oneQuestionByType(req.params.type)
               .then((question) => {
                res.status(200).json(question);
               });
  }
  static create(req, res) {
    const questionData = {
      question: req.body.question,
      type: req.body.type,
    };
    QuestionDAO.create(questionData)
               .then((question) => res.status(200).json(question));
  }
  static update(req, res) {
    const updateData = {
      id: req.params.id,
      question: req.body.question,
      type: req.body.type,
    };
    console.log(updateData);
    QuestionDAO.update(updateData)
               .then((response) => res.status(200).json(response));
  }
  static delete(req, res) {
    QuestionDAO.delete(req.params.id)
                .then(() => res.status(204).end());
  }
}

module.exports = QuestionsController;

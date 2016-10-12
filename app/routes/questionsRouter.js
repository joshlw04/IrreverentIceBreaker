const express = require('express');
const QuestionsController = require('../controllers/questionsController');

const router = express.Router();

router.get('/', QuestionsController.getAllQuestions);
router.get('/:type', QuestionsController.getRandomQuestion);
router.post('/', QuestionsController.create);
router.put('/:id', QuestionsController.update);
router.delete('/:id', QuestionsController.delete);

module.exports = router;

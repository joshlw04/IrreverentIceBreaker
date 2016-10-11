const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/', AdminController.getAll);
router.get('/:id', AdminController.getOne);

module.exports = router;

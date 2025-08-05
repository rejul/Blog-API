const express = require('express');
const router = express.Router();

const categoryController = require('../controller/categoryController');
const {
  validateCreateCategory,
  validateCategoryIdParam
} = require('../validator/categoryValidator');
const validate = require('../validator/validate');

// POST /categories
router.post('/', validateCreateCategory, validate, categoryController.createCategory);

// GET /categories
router.get('/', categoryController.getAllCategories);

// GET /categories/:id
router.get('/:id', validateCategoryIdParam, validate, categoryController.getCategoryById);

// PUT /categories/:id
router.put('/:id', validateCreateCategory, validate, categoryController.updateCategory);

// DELETE /categories/:id
router.delete('/:id', validateCategoryIdParam, validate, categoryController.deleteCategory);

module.exports = router;

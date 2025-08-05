const { body, param } = require('express-validator');

// Validate creating a new category
exports.validateCreateCategory = [
  
  body('categoryName')
    .notEmpty()
    .withMessage('categoryName is required'),
  body('slug')
    .notEmpty()
    .withMessage('slug is required')
];

// Validate categoryId in route param (e.g., /categories/:id)
exports.validateCategoryIdParam = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Category ID in params must be a positive integer')
];

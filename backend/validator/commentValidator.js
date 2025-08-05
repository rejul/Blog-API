const { body, param } = require('express-validator');

// Validate creating a new comment
exports.validateCreateComment = [
  

  body('title')
    .notEmpty()
    .withMessage('title is required'),

  body('description')
    .notEmpty()
    .withMessage('description is required'),

  body('categoryId')
    .isInt({ min: 1 })
    .withMessage('categoryId must be a positive integer'),

  body('commentDate')
    .isISO8601()
    .withMessage('commentDate must be a valid ISO date'),

  body('rating')
    .isFloat({ min: 0, max: 5 })
    .withMessage('rating must be between 0 and 5'),

  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean')
];

// Validate commentId in route param (e.g., /comments/:id)
exports.validateCommentIdParam = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Comment ID in params must be a positive integer')
];

// Validate categoryId in param for filtering comments by category
exports.validateCategoryIdForCommentFilter = [
  param('categoryId')
    .isInt({ min: 1 })
    .withMessage('Category ID must be a positive integer')
];

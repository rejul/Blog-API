const express = require('express');
const router = express.Router();

const commentController = require('../controller/commentController');
const {
  validateCreateComment,
  validateCommentIdParam,
  validateCategoryIdForCommentFilter
} = require('../validator/commentValidator');
const validate = require('../validator/validate');

// POST /comments
router.post('/', validateCreateComment, validate, commentController.createComment);

// GET /comments
router.get('/', commentController.getAllComments);

// GET /comments/:id
router.get('/:id', validateCommentIdParam, validate, commentController.getCommentById);

// PUT /comments/:id
router.put('/:id', validateCommentIdParam, validate, commentController.updateComment);

// DELETE /comments/:id
router.delete('/:id', validateCommentIdParam, validate, commentController.deleteComment);

// GET /categories/:categoryId/comments – Retrieve all comments under a specific category
router.get(
  '/:categoryId/comments',
  validateCategoryIdForCommentFilter,
  validate,
  commentController.getCommentsByCategory
);

module.exports = router;

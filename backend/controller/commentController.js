const Comment = require('../model/comment');

// POST /comments – Add a new comment
exports.createComment = async (req, res) => {
    try {
        // Validate required fields )
        // if (!req.body.desciption || !req.body.categoryId) {
        //     return res.status(400).json({ error: 'Content and categoryId are required.' });
        // }

        const newComment = await Comment.create(req.body);

        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate({
    // Populate usig local and foreign fields since we are not using ObjectId method
      path: 'categoryId',
      model: 'Category',
      localField: 'categoryId',
      foreignField: 'categoryId',
      justOne: true
    });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /comments/:id
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({ commentId: parseInt(req.params.id) }).populate({
      path: 'categoryId',
      model: 'Category',
      localField: 'categoryId',
      foreignField: 'categoryId',
      justOne: true
    });

    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /comments/:id
exports.updateComment = async (req, res) => {
  try {
    const updated = await Comment.findOneAndUpdate(
      { commentId: parseInt(req.params.id) },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Comment not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /comments/:id
exports.deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.findOneAndDelete({ commentId: parseInt(req.params.id) });
    if (!deleted) return res.status(404).json({ error: 'Comment not found' });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// • GET /categories/:categoryId/comments – Retrieve all comments under a specific category 

exports.getCommentsByCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId); 

    const comments = await Comment.find({ categoryId })
      .populate({
        path: 'categoryId',
        model: 'Category',
        localField: 'categoryId',
        foreignField: 'categoryId',
        justOne: true
      });

    if (!comments.length) {
      return res.status(404).json({ message: 'No comments found for this category' });
    }

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
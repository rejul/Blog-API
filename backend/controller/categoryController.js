const Category = require('../model/category');

// POST /categories
exports.createCategory = async (req, res) => {
  try {
    const { categoryName, slug } = req.body;
    const newCategory = await Category.create({ categoryName, slug });
    res.status(201).json({ message: 'Category created successfully', newCategory });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /categories/:id
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ categoryId: req.params.id });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /categories/:id
exports.updateCategory = async (req, res) => {
  try {
    const updated = await Category.findOneAndUpdate({ categoryId: req.params.id }, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Category not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /categories/:id
exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ categoryId: req.params.id });
    if (!deleted) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

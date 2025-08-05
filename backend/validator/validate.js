const { validationResult } = require('express-validator');

// Custom middleware to handle validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed ! No partial update is allowed on POST / PUT requests',
      errors: errors.array()
    });
  }

  next();
};

module.exports = validate;

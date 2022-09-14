const mapError = require('../../utils/error');

const validName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res
      .status(mapError('INVALID_VALUE'))
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = { validName };
const mapError = require('../../utils/error');

const validQuantity = (req, res, next) => {
  const { body } = req;

  const quantity = body.every((item) => item.quantity || item.quantity === 0);

 if (!quantity) {
  return res
    .status(mapError('IS_REQUIRED'))
    .json({ message: '"quantity" is required' });
}
  
  const quantityFiltered = body.every((item) => item.quantity >= 1);
  
  if (!quantityFiltered) {
    return res
      .status(mapError('INVALID_VALUE'))
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = { validQuantity };
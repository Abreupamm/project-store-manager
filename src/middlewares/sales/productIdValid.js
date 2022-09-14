const mapError = require('../../utils/error');

const validProductId = (req, res, next) => { 
  const { body } = req;
  
  const productId = body.filter((item) => item.productId);
  
  if (productId.length !== body.length || !productId) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({ message: '"productId" is required' });
  }
  
  next();
};

module.exports = { validProductId };
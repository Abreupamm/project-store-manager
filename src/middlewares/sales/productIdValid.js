const mapError = require('../../utils/error');
const productsModel = require('../../models/productsModel');

const validProductId = async (req, res, next) => { 
  const { body } = req;
  const productId = body.filter((item) => item.productId);
  
  if (productId.length === 0) {
    return res
    .status(mapError('IS_REQUIRED'))
    .json({ message: '"productId" is required' });
  }

  const isProductId = await Promise.all(body.map(async (item) => {
    const result = await productsModel.selectProductsById(item.productId);
    return result[0];
  }));

  const isId = isProductId.every((item) => item !== undefined);

  if (!isId) {
    return res
      .status(mapError('NOT_FOUND'))
      .json({ message: 'Product not found' });
  }
  next();
};

module.exports = { validProductId };
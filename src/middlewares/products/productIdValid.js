const mapError = require('../../utils/error');

const productService = require('../../services/productsService');

const validIsProductById = async (req, res, next) => { 
  const { id } = req.params;
  
  const { type } = await productService.getProductsById(id);

  if (type) {
   return res.status(mapError('NOT_FOUND')).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { validIsProductById };
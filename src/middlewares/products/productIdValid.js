const mapError = require('../../utils/error');

const { getProductsById } = require('../../services/productsService');

const validIsProductById = async (req, res, next) => { 
  const { id } = req.params;
  
  const { type } = await getProductsById(id);

  if (type) {
   return res.status(mapError('NOT_FOUND')).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { validIsProductById };
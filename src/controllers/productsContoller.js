const productsService = require('../services/productsService');

const products = async (req, res) => {
  const { type, message } = await productsService.getAllProducts();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getAllProductsById(id);
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = { products, productById };
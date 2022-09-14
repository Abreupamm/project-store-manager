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

const productPost = async (req, res) => {
  const { name } = req.body;
  const id = await productsService.newProduct(name);
  return res.status(201).json({ id, name });
};

const productPut = async (req, res) => {
  const { id } = req.params;
  const { name } = req.bidy;
  const result = await productsService.upDateProduct(id, name);
  return res.status(200).json({ id, name: result });
};

module.exports = {
  products,
  productById,
  productPost,
  productPut,
};
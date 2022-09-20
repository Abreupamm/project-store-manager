const productsService = require('../services/productsService');

const products = async (req, res) => {
  const { type, message } = await productsService.getAllProducts();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);
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
  const { name } = req.body;

  const { type } = await productsService.upDateProduct(id, name);
  if (!type) {
    return res.status(200).json({ id, name });
  }
};

const productByIdDelete = async (req, res) => { 
  const { id } = req.params;
  const { type } = await productsService.deleteProduct(id);
  if (!type) {
    return res.status(204).end();
  }
};

const productSearch = async (req, res) => {
  const { q } = req.query;
  const productResult = await productsService.getProductSearch(q);
  return res.status(200).json(productResult.message);  
};

module.exports = {
  products,
  productById,
  productPost,
  productPut,
  productByIdDelete,
  productSearch,
};
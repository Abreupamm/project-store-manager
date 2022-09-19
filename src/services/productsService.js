// const express = require('express');

const modelsProducts = require('../models/productsModel');
const mapError = require('../utils/error');

const getAllProducts = async () => {
  const result = await modelsProducts.selectProducts();
  if (!result) return { type: mapError('NOT_FOUND'), message: 'Products not found' };

  return { type: null, message: result };
};

const getProductsById = async (productId) => { 
  const result = await modelsProducts.selectProductsById(productId);

  if (result.length === 0) return { type: mapError('NOT_FOUND'), message: 'Product not found' };

  return { type: null, message: result[0] };
};

const newProduct = async (product) => {
  const result = await modelsProducts.insertProducts(product);
  return result;
};

const upDateProduct = async (id, neWname) => {
  const result = await modelsProducts.upDateProductById(id, neWname);
  return { type: null, result };
};

const deleteProduct = async (id) => { 
  const result = await modelsProducts.deleteProductById(id);
  return { type: null, result };
};

module.exports = {
  getAllProducts,
  getProductsById,
  newProduct,
  upDateProduct,
  deleteProduct,
};

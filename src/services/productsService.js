// const express = require('express');

const modelsProducts = require('../models/productsModel');
const mapError = require('../utils/error');

const getAllProducts = async () => {
  const result = await modelsProducts.selectProducts();
  
  return { type: null, message: result };
};

const getAllProductsById = async (product) => { 
  const result = await modelsProducts.selectProducts(product);
  
  if (!result) return { type: mapError('NOT_FOUND'), message: 'Product not found' };

  return { type: null, message: result };
};

module.exports = { getAllProducts, getAllProductsById };

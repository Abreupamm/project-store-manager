// const connection = require('../db/connection');

const findProducts = require('../db/productsDB');

const selectProducts = async (product) => {
  // const columns = Object.keys(product).map((key) => `${key}`).join(', ');
  // const placeholders = Object.keys(product).map((_key) => '?').join(', ');
  let products;
  if (!product) { 
    products = await findProducts.findAll();
  } else {
    products = await findProducts.findById(product);
  }
  return products;
};

module.exports = { selectProducts };
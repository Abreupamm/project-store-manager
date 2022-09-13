const connection = require('../db/connection');

const selectProducts = async (productId) => {
  let products;
  if (!productId) { 
    products = await connection.execute('SELECT * FROM  StoreManager.products');
  } else {
    products = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?',
      [productId],
    );
  }
  return products[0];
};

module.exports = { selectProducts };
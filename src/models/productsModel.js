const connection = require('../db/connection');

const table = 'StoreManager.products';

const selectProducts = async (productId) => {
  let products;
  if (!productId) { 
    products = await connection.execute(`SELECT * FROM ${table}`);
  } else {
    products = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?',
      [productId],
    );
  }
  return products[0];
};

const insertProducts = async (product) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO ${table} (name) VALUES (?)`, [JSON.stringify(product)],
  );
  return insertId;
};

module.exports = { selectProducts, insertProducts };
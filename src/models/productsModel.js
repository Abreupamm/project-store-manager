const connection = require('../db/connection');

const table = 'StoreManager.products';

const selectProducts = async () => {
  const products = await connection.execute(`SELECT * FROM ${table}`);
 
  return products[0];
};

const selectProductsById = async (productId) => {
  const products = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  
  return products[0];
};

const insertProducts = async (product) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO ${table} (name) VALUES (?)`, [JSON.stringify(product)],
  );
  return insertId;
};

const upDateProductById = async (id, name) => {
  const newName = JSON.stringify(name);
  const product = await connection.execute(
    `UPDATE ${table}
    SET name = ${newName}
    WHERE id = ${id}`,
  );
 
  return product;
};

const deleteProductById = async (id) => { 
  const deleteProduct = await connection.execute(
    `DELETE FROM ${table}
    WHERE id = ${id}`,
  );
  return deleteProduct;
};

module.exports = {
  selectProducts,
  selectProductsById,
  insertProducts,
  upDateProductById,
  deleteProductById,
};
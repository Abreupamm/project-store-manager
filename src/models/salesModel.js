const connection = require('../db/connection');

const table1 = 'StoreManager.sales';
const table2 = 'StoreManager.sales_products';

const createSales = async (sales) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO ${table1} (date) VALUES
    (NOW())`,
  );
  
  await Promise.all(sales.map(async (item) => {
    await connection.execute(
      `INSERT INTO ${table2} (sale_id, product_id, quantity) VALUES (?, ?, ?)`,
      [insertId, item.productId, item.quantity],
    );
  }));
  
  return insertId;
};

const getAllSales = async () => { 
  const result = await connection.execute(
    `SELECT * FROM ${table2}`,
  );
  return result;
};

module.exports = {
  createSales,
  getAllSales,
};
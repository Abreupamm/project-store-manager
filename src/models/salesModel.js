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
    `SELECT sa.id AS 'saleId',
    sa.date AS 'date',
    pr.product_id AS 'productId',
    pr.quantity AS 'quantity'
    FROM ${table1} AS sa
    INNER JOIN ${table2} AS pr ON sa.id = pr.sale_id`,
  );
  return result[0];
};

const getByIdSales = async (id) => { 
  const result = await connection.execute(
    `SELECT * FROM ${table2} WHERE sale_id = ${id}, date ORDER BY sale_id ASC, product_id ASC`,
  );
  return result;
};

module.exports = {
  createSales,
  getAllSales,
  getByIdSales,
};
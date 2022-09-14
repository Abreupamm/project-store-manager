const modelsSales = require('../models/salesModel');

const newSale = async (sales) => {
  const id = await modelsSales.createSales(sales);
 
  return { type: null, message: { id, itemSold: sales } };
};
 
module.exports = { newSale };
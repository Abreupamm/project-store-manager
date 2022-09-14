const modelsSales = require('../models/salesModel');

const newSale = async (sales) => {
  const id = await modelsSales.createSales(sales);
 
  return { type: null, message: { id, itemsSold: sales } };
};
 
module.exports = { newSale };
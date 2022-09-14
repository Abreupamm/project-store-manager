const modelsSales = require('../models/salesModel');

const newSale = async (sales) => {
  const id = await modelsSales.createSales(sales);
 
  return { type: null, message: { id, itemsSold: sales } };
};

const getSales = async (id) => {
  let message;

  if (!id) {
    message = await modelsSales.getAllSales();
  } else {
    message = await modelsSales.getByIdSales(id);
  }

  return { type: null, message };
};
 
module.exports = { newSale, getSales };
const serviceSales = require('../services/salesService');

const sales = async (req, res) => { 
  const { body } = req;
  
  const { message } = await serviceSales.newSale(body);

  return res.status(201).json(message);
};

module.exports = { sales };
const serviceSales = require('../services/salesService');

const sales = async (req, res) => { 
  const { body } = req;
  
  const { message } = await serviceSales.newSale(body);

  return res.status(201).json(message);
};

const getSales = async (req, res) => {
  const { id } = req.params;
  
  const { message } = await serviceSales.getSales(id);
  
  return res.status(200).json(message);
};

module.exports = { sales, getSales };
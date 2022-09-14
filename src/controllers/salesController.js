const serviceSales = require('../services/salesService');

const sales = async (req, res) => { 
  const { body } = req;
  
  const { type, message } = await serviceSales.newSale(body);

  if (type) {
    return;
  }

  return res.status(201).json(message);
};

module.exports = { sales };
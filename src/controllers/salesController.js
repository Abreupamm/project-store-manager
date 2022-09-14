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

const deleteSales = async (req, res) => { 
  const { id } = req.params;

  const { type } = await serviceSales.deleteSales(id);

  if (!type) {
    return res.status(204).end();
  }
};

const upDateSales = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const type = await serviceSales.upDateSales(id, body);

   if (!type) {
    return res.status(200).json({ saleId: JSON.parse(id), itemsUpdated: body });
  }
};

module.exports = { sales, getSales, deleteSales, upDateSales };
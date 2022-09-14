const mapError = require('../../utils/error');
const { getByIdSales } = require('../../models/salesModel');

const validSaleById = async (req, res, next) => { 
  const { id } = req.params;
  const validId = await getByIdSales(id);

  if (validId.length === 0) {
    return res
      .status(mapError('NOT_FOUND'))
      .json({ message: 'Sale not found' });
  }

  next();
};

module.exports = { validSaleById };
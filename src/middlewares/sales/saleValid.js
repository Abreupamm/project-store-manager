const mapError = require('../../utils/error');
const { getSales } = require('../../services/salesService');

const validSaleById = async (req, res, next) => { 
  const { id } = req.params;
  const { message } = await getSales(id);

  if (message.length === 0) {
    return res
      .status(mapError('NOT_FOUND'))
      .json({ message: 'Sale not found' });
  }

  next();
};

module.exports = { validSaleById };
const errorMap = {
  NOT_FOUND: 404,
  INVALID_VALUE: 422,
  CONFLICT: 409,
  IS_REQUIRED: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;

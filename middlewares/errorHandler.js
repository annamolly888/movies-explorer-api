const { ERR_MESSAGE_SERVER_ERROR } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? ERR_MESSAGE_SERVER_ERROR
        : message,
    });

  next();
};
const { products } = require('./mock')
const { headers } = require('./constants/headers')

exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(products),
  };
};

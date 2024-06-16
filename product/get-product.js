const { products } = require('./mock')
const { headers } = require('./constants/headers')

exports.getProductsById = function (event) {
    const product = Array.from(products).find(product => event.pathParameters.productId === '' + product.userFrandlyId)

    if (!product) return {
        statusCode: 404,
        headers,
        body: 'No content',
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(product),
    };
}
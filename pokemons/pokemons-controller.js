const createErrorResponse = require('../response/create-error-response');
const createSuccessResponse = require('../response/create-success-response');

const pokemonsService = require('./pokemons-service');

const list = async (event, context, callback) => {
  const { limit, offset } = event.queryStringParameters || {};

  try {
    const pokemons = await pokemonsService.list(limit, offset);
    callback(null, createSuccessResponse(pokemons));
  } catch (error) {
    callback(null, createErrorResponse(error));
  }
};

module.exports = {
  list
}
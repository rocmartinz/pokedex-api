import { InternalServerErrorResponse, OkResponse } from '../response';

import PokemonsService from './PokemonsService';

export const list = async (event, context, callback) => {
  const { limit, offset } = event.queryStringParameters || {};

  try {
    const pokemons = await PokemonsService.list(limit, offset);
    callback(null, new OkResponse(pokemons));
  } catch (error) {
    callback(null, new InternalServerErrorResponse(error));
  }
};
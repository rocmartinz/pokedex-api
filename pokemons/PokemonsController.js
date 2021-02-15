import {
  BadRequestResponse,
  InternalServerErrorResponse,
  OkResponse
} from '../response';

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

export const read = async (event, context, callback) => {
  const { id } = event.pathParameters || {};

  const invalidParameters = !id || Number.isNaN(Number(id));
  if (invalidParameters) {
    callback(null, new BadRequestResponse('ID must be provided'));
  }

  try {
    const pokemon = await PokemonsService.read(id);
    callback(null, new OkResponse(pokemon));
  } catch (error) {
    callback(null, new InternalServerErrorResponse(error));
  }
};
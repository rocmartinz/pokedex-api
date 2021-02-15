const axios = require('axios');

const toPokemonRequest = (pokemon) => axios.get(pokemon.url);
const toPokemon = (pokemonResponse) => {
  const { data: {
    id,
    name,
    sprites,
  } } = pokemonResponse;

  return {
    id,
    image: sprites.front_default,
    name,
  };
};
const mapToPokemons = (pokemonsResponses) => pokemonsResponses.map(toPokemon);
const list = async (limit = 10, offset = 0) => {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const config = { params: { limit, offset } };
  try {
    const { data: { results: pokemons } } = await axios.get(url, config);
    const pokemonsRequests = pokemons.map(toPokemonRequest);
    return axios.all(pokemonsRequests).then(mapToPokemons);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  list
}
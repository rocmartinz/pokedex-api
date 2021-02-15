import axios from 'axios';

const toPokemonRequest = (pokemon) => axios.get(pokemon.url);
const toPokemon = (pokemonResponse) => {
  const { data: {
    id,
    name,
    sprites: { front_default: image },
  } } = pokemonResponse;
  return { id, image, name };
};
const mapToPokemons = (pokemonsResponses) => pokemonsResponses.map(toPokemon);

export default {
  async list(limit = 10, offset = 0) {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const config = { params: { limit, offset } };
    try {
      const { data: { results: pokemons } } = await axios.get(url, config);
      const pokemonsRequests = pokemons.map(toPokemonRequest);
      return axios.all(pokemonsRequests).then(mapToPokemons);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
import axios from 'axios';

import Pokemon from './Pokemon';

const toPokemonRequest = (pokemon) => axios.get(pokemon.url);
const toPokemon = ({ data }) => new Pokemon(data);
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
  },
  async read(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const response = await axios.get(url);
      return Promise.resolve(toPokemon(response));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
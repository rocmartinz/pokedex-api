export default class Pokemon {
  constructor({
    id,
    name,
    types,
  }) {
    this.id = id;
    this.name = name;
    this.image = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    this.types = types.map((type) => type.type.name);
  }
}
export default class Pokemon {
  constructor({
    id,
    name,
    sprites: { front_default: image },
  }) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
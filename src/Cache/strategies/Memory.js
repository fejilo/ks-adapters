import _Strategy from './_Strategy.js';
class Memory extends _Strategy {
  #store;
  constructor() {
    super();
    this.#store = new Map();
  }
  get(key) {
    return this.#store.get(key);
  }
  set(key, value) {
    this.#store.set(key, value);
  }
  remove(key) {
    this.#store.delete(key);
  }
  clear() {
    this.#store.clear();
  }
}

export default Memory;

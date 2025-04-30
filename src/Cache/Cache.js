import LocalStorage from './strategies/LocalStorage.js';
import Memory from './strategies/Memory.js';

class Cache {
  constructor(strategy = 'memory') {
    if (!strategy) throw new Error('Cache strategy is required');
    switch (strategy) {
      case 'localStorage':
        this.strategy = new LocalStorage();
        break;
      case 'memory':
        this.strategy = new Memory();
        break;
      default:
        throw new Error(`Estrategia no válida: ${strategy}`);
    }
  }

  get(key) {
    return this.strategy.get(key);
  }

  set(key, value) {
    this.strategy.set(key, value);
  }

  remove(key) {
    this.strategy.remove(key);
  }

  clear() {
    this.strategy.clear();
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }
}

export default Cache;

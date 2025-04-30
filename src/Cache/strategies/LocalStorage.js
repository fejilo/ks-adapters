import _Strategy from './_Strategy.js';
class localStorage extends _Strategy {
  constructor() {
    super();
  }

  get(key) {
    const raw = window.localStorage.getItem(key);
    try {
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return raw;
    }
  }

  set(key, value) {
    try {
      const isObject = typeof value === 'object' && value !== null;
      const json = isObject ? JSON.stringify(value) : String(value);
      window.localStorage.setItem(key, json);
    } catch (e) {
      console.error(`Error setting localStorage[${key}]:`, e);
    }
  }

  remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.error(`Error in localStorage[${key}]:`, e);
    }
  }

  clear() {
    try {
      window.localStorage.clear();
    } catch (e) {
      console.error('Error in localStorage:', e);
    }
  }
}

export default localStorage;

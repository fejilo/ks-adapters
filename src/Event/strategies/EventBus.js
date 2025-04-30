import _Strategy from './_Strategy.js';

class EventBus extends _Strategy {
  static #instance = null;
  constructor() {
    if (EventBus.#instance) {
      return EventBus.#instance;
    }
    super();
    this.listeners = new Map();
    EventBus.#instance = this;
  }

  /**
   * Subscribe to Event.
   * @param {string} eventName - Event Name
   * @param {Function} callback - Function to be called when the event is emitted
   */
  subscribe(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }
    this.listeners.get(eventName).add(callback);
  }

  /**
   * Unsubscribe from Event.
   * @param {string} eventName - Event name
   * @param {Function} callback - Function to be removed (should be the same as the one used in subscribe)
   */
  unsubscribe(eventName, callback) {
    if (!this.listeners.has(eventName)) return;
    this.listeners.get(eventName).delete(callback);

    // Limpieza si no quedan callbacks para ese evento
    if (this.listeners.get(eventName).size === 0) {
      this.listeners.delete(eventName);
    }
  }

  /**
   * Emit an event to all subscribers.
   * @param {string} eventName - Event name
   * @param {any} payload - Data sent to subscribers
   */
  emit(eventName, payload) {
    if (!this.listeners.has(eventName)) return;
    for (const callback of this.listeners.get(eventName)) {
      callback(payload);
    }
  }

  /**
   * subscribe to an event only once.
   * @param {string} eventName
   * @param {Function} callback
   */
  subscribeOnce(eventName, callback) {
    const handler = payload => {
      callback(payload);
      this.unsubscribe(eventName, handler);
    };
    this.subscribe(eventName, handler);
  }

  /**
   * Clena all listeners.
   */
  clear() {
    this.listeners.clear();
  }

  /**
   * Get the singleton instance of EventBus.
   * @returns {EventBus} The singleton instance of EventBus
   */
  static getInstance() {
    if (!EventBus.#instance) {
      EventBus.#instance = new EventBus();
    }
    return EventBus.#instance;
  }
}

export default EventBus;

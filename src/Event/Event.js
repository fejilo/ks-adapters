import EventBus from './strategies/EventBus.js';

class Event {
  constructor(strategy = 'eventBus') {
    if (!strategy) throw new Error('Event strategy is required');
    switch (strategy) {
      case 'eventBus':
        this.strategy = new EventBus();
        break;
      default:
        throw new Error(`Strategy not found: ${strategy}`);
    }
  }
  subscribe(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.subscribe(eventName, callback);
  }
  unsubscribe(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.unsubscribe(eventName, callback);
  }
  emit(eventName, payload) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.emit(eventName, payload);
  }
  subscribeOnce(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.subscribeOnce(eventName, callback);
  }
  clear() {
    return this.strategy.clear();
  }
}

export default Event;

class _Strategy {
  constructor() {}

  connect() {
    throw new Error('connect method must be implemented');
  }

  disconnect() {
    throw new Error('disconnect method must be implemented');
  }

  on(eventName, callback) {
    throw new Error('on method must be implemented');
  }

  off(eventName, callback) {
    throw new Error('off method must be implemented');
  }

  emit(eventName, payload) {
    throw new Error('emit method must be implemented');
  }

  once(eventName, callback) {}
}

export default _Strategy;

class _Strategy {
  constructor() {}

  subscribe() {
    throw new Error('subscribe method must be implemented');
  }

  unsubscribe() {
    throw new Error('unsubscribe method must be implemented');
  }

  emit(eventName, callback) {
    throw new Error('on method must be implemented');
  }
}

export default _Strategy;

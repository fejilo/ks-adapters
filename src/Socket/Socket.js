import SocketIO from './strategies/SocketIO.js';

class Socket {
  /**
   * Socket class that manages the connection to the server using different strategies
   * @param {String} strategy - strategy to use for socket connection
   * @param {String} serverUrl - server URL
   * @param {Object} options - options for the socket connection
   */
  constructor(strategy = 'socketIO', serverUrl, options = {}) {
    if (!strategy) throw new Error('socket strategy is required');
    if (!serverUrl) throw new Error('Server URL is required');
    switch (strategy) {
      case 'socketIO':
        this.strategy = new SocketIO(serverUrl, options);
        break;
      default:
        throw new Error(`Strategy not found: ${strategy}`);
    }
  }
  connect() {
    return this.strategy.connect();
  }

  disconnect() {
    return this.strategy.disconnect();
  }

  on(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.on(eventName, callback);
  }

  off(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.off(eventName, callback);
  }

  emit(eventName, payload) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.emit(eventName, payload);
  }

  once(eventName, callback) {
    if (!eventName) throw new Error('Event name is required');
    return this.strategy.once(eventName, callback);
  }
}

export default Socket;

import { io } from 'socket.io-client';
import _Strategy from './_Strategy.js';

//SocketIO is a singleton class that manages a single instance of the Socket.IO client
class SocketIO extends _Strategy {
  static #instance = null;

  constructor(
    serverUrl,
    {
      transport = ['websocket'],
      auth = {},
      autoConnect = false,
      reconnectionAttempts = 5,
      reconnectionDelay = 1000,
      timeout = 20000,
    } = {}
  ) {
    if (!serverUrl) {
      throw new Error('Server URL is required');
    }

    if (SocketIO.#instance) {
      return SocketIO.#instance;
    }

    super();

    this.serverUrl = serverUrl;
    this.options = {
      transport,
      auth,
      autoConnect,
      reconnectionAttempts,
      reconnectionDelay,
      timeout,
    };

    this.socket = io(serverUrl, this.options);

    // Default event handlers
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    this.socket.on('connect_error', error => {
      console.error('Connection error:', error);
    });

    SocketIO.#instance = this;
  }

  connect() {
    if (!this.socket.connected) {
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.socket.connected) {
      this.socket.removeAllListeners(); // Clean up listeners
      this.socket.disconnect();
    }
  }

  on(eventName, callback) {
    this.socket.on(eventName, callback);
  }

  off(eventName, callback) {
    this.socket.off(eventName, callback);
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  once(eventName, callback) {
    this.socket.once(eventName, callback);
  }

  static getInstance(serverUrl, options = {}) {
    if (!SocketIO.#instance) {
      SocketIO.#instance = new SocketIO(serverUrl, options);
    }
    return SocketIO.#instance;
  }
}

export default SocketIO;

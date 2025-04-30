import Mock from './strategies/Mock.js';
import API from './strategies/API.js';

class Data {
  constructor(strategy = 'mock') {
    if (!strategy) throw new Error('Data strategy is required');
    switch (strategy) {
      case 'mock':
        this.strategy = new Mock();
        break;
      case 'api':
        this.API = new API();
        break;
      default:
        throw new Error(`Strategy not found: ${strategy}`);
    }
  }

  /**
   * fetch data
   * @param {String} path - file/url path
   * @param {Object} payload - data for request
   * @param {String} token - security access token
   * @returns {Promise<object>} Promise with the data fetched in (JSON format)
   */
  async fetch(path, payload = {}, token = null) {
    if (!path) throw 'path is required';
    return await this.strategy.fetch(path, payload, token);
  }
}

export default Data;

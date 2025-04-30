import _Strategy from './_Strategy.js';
import mockApiClient from './mockApiClient/mockApiClient.js';

class Mock extends _Strategy {
  constructor() {
    super();
  }

  /**
   * fetch a mock file
   * @param {String} path - file name
   * @param {Object} payload - data for request
   * @param {String} token - security access token
   * @returns {Promise<object>} Promise with the file fetch in (JSON format)
   */

  async fetch(path, payload, token) {
    if (!mockApiClient[path]) throw new Error(`Invalid path: ${path}`);
    return await mockApiClient[path](payload, token);
  }
}

export default Mock;

import _Strategy from './_Strategy.js';

class JWT extends _Strategy {
  constructor() {
    super();
  }

  /**
   * Validate de token expires
   * @param {String} token -string token
   * @returns {Boolean} - result of the validation true/false
   */
  isValid(token) {
    if (!token) return false;
    try {
      const payload = this.decode(token);
      const now = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < now) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
   * decode a JWT Token
   * @param {string} token - string token to decode
   * @returns {Object|null} - payoad object or null if the token not is valid
   */
  decode(token) {
    if (!token) return null;
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      const payloadEncoded = parts[1];

      const payloadDecoded = atob(
        payloadEncoded
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .padEnd(payloadEncoded.length + ((4 - (payloadEncoded.length % 4)) % 4), '=')
      );

      return JSON.parse(payloadDecoded);
    } catch (err) {
      return null;
    }
  }
}

export default JWT;

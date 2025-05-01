import JWT from "./strategies/JWT.js";
import decompression from "./helpers/decompression.js";
class Auth {
  constructor(strategy = "JWT") {
    if (!strategy) throw new Error("Auth strategy is required");
    switch (strategy) {
      case "JWT":
        this.strategy = new JWT();
        break;
      default:
        throw new Error(`Invalid Adapter: ${strategy}`);
    }
  }

  isValid(token) {
    return this.strategy.isValid(token);
  }

  decode(token) {
    const payload = this.strategy.decode(token);
    return decompression(payload);
  }
}

export default Auth;

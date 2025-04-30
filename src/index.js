import Auth from "./Auth/Auth.js";
import Cache from "./Cache/Cache.js";
import Event from "./Event/Event.js";
import Socket from "./Socket/Socket.js";

export { Auth, Cache, Event, Socket };

export default {
  Auth,
  Cache,
  Event,
  Socket,
};

// CommonJS
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    Auth,
    Cache,
    Event,
    Socket,
    default: { Auth, Cache, Event, Socket },
  };
}

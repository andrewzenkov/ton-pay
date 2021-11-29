const axios = require("axios");

const { SDKAPI } = require("./api");
const { errors } = require("./constants");

class TonService {
  client = null;
  token = null;

  constructor({ client = null }) {
    this.client = this.validateClient(client);
  }

  validateClient(client = null) {
    if (!client) {
      throw new Error(errors.clientMustBeProvided);
    }

    return client;
  }

  validateToken(token = "") {
    if (!token) {
      throw new Error(errors.tokenMustBeProvided);
    }

    return token;
  }

  getApiSdk(token = "") {
    this.token = this.validateToken(token);

    return new SDKAPI(this.client, this.token);
  }
}

module.exports = {
  TonService,
};

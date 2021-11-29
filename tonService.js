const axios = require("axios");

const { SDK } = require("./sdk");
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

  getSdk(token = "") {
    this.token = this.validateToken(token);

    return new SDK(this.client, this.token);
  }
}

module.exports = {
  TonService,
};

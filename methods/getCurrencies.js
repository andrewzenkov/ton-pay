const { BaseMethod } = require("./base");

class GetCurrencies extends BaseMethod {
  methode = "get";
  url = "/getCurrencies";
  options = {};

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    return this.client.get(`app${this.token}${this.url}`);
  }

  static async execute(client, token, options) {
    return new GetCurrencies(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  GetCurrencies,
};

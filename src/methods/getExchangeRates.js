const { BaseMethod } = require("./base");

class GetExchangeRates extends BaseMethod {
  methode = "get";
  url = "/getExchangeRates";
  options = {};

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    return this.client({
      methode: this.methode,
      url: this.getUrl(),
    });
  }

  static async execute(client, token, options) {
    return new GetExchangeRates(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  GetExchangeRates,
};

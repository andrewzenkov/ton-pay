const { BaseMethod } = require("./base");

class GetBalance extends BaseMethod {
  methode = "get";
  url = "/getBalance";

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
    return new GetBalance(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  GetBalance,
};

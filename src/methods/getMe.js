const { BaseMethod } = require("./base");

class GetMe extends BaseMethod {
  methode = "get";
  url = "/getMe";

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    return this.client({
      url: this.getUrl(),
      methode: this.methode,
    });
  }

  static async execute(client, token, options) {
    return new GetMe(client, token, options).resolveOptions().handle();
  }
}

module.exports = {
  GetMe,
};

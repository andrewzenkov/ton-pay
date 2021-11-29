const { BaseMethod } = require("./base");

class GetPayments extends BaseMethod {
  methode = "get";
  url = "/getPayments";
  options = {
    offset: undefined,
    count: undefined,
  };

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    const { count, offset } = this.options;

    return this.client({
      url: this.getUrl(),
      methode: this.methode,
      params: { count, offset },
    });
  }

  static async execute(client, token, options) {
    return new GetPayments(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  GetPayments,
};

const { BaseMethod } = require("./base");

class ConfirmPayment extends BaseMethod {
  methode = "post";
  url = "/confirmPayment";
  options = {
    invoiceId: undefined,
  };

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    const { invoiceId } = this.options;

    return this.client({
      url: this.getUrl(),
      methode: this.methode,
      data: {
        invoice_id: invoiceId,
      },
    });
  }

  static async execute(client, token, options) {
    return new ConfirmPayment(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  ConfirmPayment,
};

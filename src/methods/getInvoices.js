const { BaseMethod } = require("./base");

class GetInvoices extends BaseMethod {
  methode = "get";
  url = "/getInvoices";

  supportedAssets = ["BTC", "TON", "ETH", "USDT", "USDC", "BUSD"];
  supportedStatus = ["active", "paid"];

  options = {
    asset: undefined,
    count: undefined,
    invoiceIds: undefined,
    offset: undefined,
    status: undefined,
  };

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    const { asset, count, invoiceIds, offset, status } = this.options;

    return this.client({
      url: this.getUrl(),
      methode: this.methode,
      params: { invoice_ids: invoiceIds, asset, count, offset, status },
    });
  }

  static async execute(client, token, options) {
    return new GetInvoices(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  GetInvoices,
};

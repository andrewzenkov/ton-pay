const { BaseMethod } = require("./base");

class CreateInvoice extends BaseMethod {
  methode = "post";
  url = "/createInvoice";

  supportedAssets = ["BTC", "TON", "ETH", "USDT", "USDC", "BUSD"];
  options = {
    asset: undefined,
    amount: undefined,
    description: undefined,
    payload: undefined,
    paidBtnUrl: undefined,
    paidBtnName: undefined,
    allowComments: undefined,
    allowAnonymus: undefined,
  }

  constructor(client, token) {
    super(client, token);
  }

  handle() {
    const {
      asset,
      amount,
      payload,
      description,
      paidBtnUrl,
      paidBtnName,
      allowComments,
      allowAnonymus,
    } = this.options;

    return this.client.post(`app${this.token}${this.url}`, {
      asset,
      amount,
      payload,
      description,
      paid_btn_url: paidBtnUrl,
      paid_btn_name: paidBtnName,
      allow_comments: allowComments,
      allow_anonymus: allowAnonymus,
    });
  }

  static execute(client, token, options) {
    return new CreateInvoice(client, token).resolveOptions(options).handle();
  }
}

module.exports = {
  CreateInvoice,
};

const axios = require("axios");

const {
  GetMe,
  ConfirmPayment,
  CreateInvoice,
  GetBalance,
  GetCurrencies,
  GetExchangeRates,
  GetInvoices,
  GetPayments,
} = require("./methods");

class SDK {
  client = null;
  token = "";

  constructor(client, token) {
    this.client = client;
    this.token = token;
  }

  async getMe(options = {}) {
    return GetMe.execute(this.client, this.token, options);
  }

  async confirmPayment(options = {}) {
    return ConfirmPayment.execute(this.client, this.token, options);
  }

  async createInvoice(options = {}) {
    return CreateInvoice.execute(this.client, this.token, options);
  }

  async getBalance(options = {}) {
    return GetBalance.execute(this.client, this.token, options);
  }

  async getCurrencies(options = {}) {
    return GetCurrencies.execute(this.client, this.token, options);
  }

  async getExchangeRates(options = {}) {
    return GetExchangeRates.execute(this.client, this.token, options);
  }

  async getInvoices(options = {}) {
    return GetInvoices.execute(this.client, this.token, options);
  }

  async getPayments(options = {}) {
    return GetPayments.execute(this.client, this.token, options);
  }
}

module.exports = {
  SDK,
};

const { testTonService, tonService } = require("./index");

const token = "3270:AAVapxquz1A2WhKpLEQqhNjIZbvZygevltk";

(async () => {

  try {
  const sdk = testTonService.getSdk(token);

    const getMe = await sdk.getMe();
    console.log("getMe", getMe.data);

    const getBalance = await sdk.getBalance();
    console.log("getBalance", getBalance.data);

    const getPayments = await sdk.getPayments();
    console.log("getPayments", getPayments.data);

    const getCurrencies = await sdk.getCurrencies();
    console.log("getCurrencies", getCurrencies.data);

    const getExchangeRates = await sdk.getExchangeRates();
    console.log("getExchangeRates", getExchangeRates.data);

    const getInvoices = await sdk.getInvoices();
    console.log(
      "getInvoices",
      JSON.stringify(getInvoices.data.result.items, null, 2)
    );

    const createInvoice = await sdk.createInvoice({
      asset: "USDT",
      amount: "2.0",
    });
    console.log("createInvoice", createInvoice.data);

     const confirmPayment = await sdk.confirmPayment({
      asset: "USDT",
      invoiceId: 1245,
    });
    console.log("confirmPayment", confirmPayment.data);
  } catch (err) {
    console.log(err);
  }
})();

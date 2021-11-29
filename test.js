const { testTonSdk, tonSdk } = require("./index");

const token = "3270:AAVapxquz1A2WhKpLEQqhNjIZbvZygevltk";

(async () => {
  const sdk = testTonSdk.getApiSdk(token);

  try {
    // Get me
    const getMe = await sdk.getMe();
    console.log("getMe", getMe.data);

    // Get balance
    const getBalance = await sdk.getBalance();
    console.log("getBalance", getBalance.data);

    // Get payments
    const getPayments = await sdk.getPayments();
    console.log("getPayments", getPayments.data);

    // Get currencies
    const getCurrencies = await sdk.getCurrencies();
    console.log("getCurrencies", getCurrencies.data);

    // Get exchange rates
    const getExchangeRates = await sdk.getExchangeRates();
    console.log("getExchangeRates", getExchangeRates.data);

    // Get invoices
    const getInvoices = await sdk.getInvoices();
    console.log(
      "getInvoices",
      JSON.stringify(getInvoices.data.result.items, null, 2)
    );

    // Create invoice
    const createInvoice = await sdk.createInvoice({
      asset: "USDT",
      amount: "2.0",
    });
    console.log("createInvoice", createInvoice.data);

    // Confirm Payment
    const confirmPayment = await sdk.confirmPayment({
      asset: "USDT",
      invoiceId: 1245,
    });
    console.log("confirmPayment", confirmPayment.data);
  } catch (err) {
    console.log(err, 1);
  }
})();

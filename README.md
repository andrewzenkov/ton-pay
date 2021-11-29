# ton-pay

## Installation

```
npm install ton-pay
```

## Usage

### Default
```
const { testTonSdk, tonSdk } = require("ton-pay");

const token = "3270:AAVapxquz1A2WhKpLEQqhNjIZbvZygevltk";

async function getMe() {
  const sdk = testTonSdk.getSdk(token);

  const response = await sdk.getMe();
  console.log(response.data);

  // do some work
}
```

### With custom client
```
const { TonServiceCreator } = require("ton-pay");

const client = axios.create({ baseURL: 'https://pay.crypt.bot' });
client.interceptors.response.use(
  (response) => response.data,
  (err) => Promise.reject(err?.response?.data)
);

const token = "3270:AAVapxquz1A2WhKpLEQqhNjIZbvZygevltk";

const service = new TonServiceCreator({ client })

async function getMe() {
  const sdk = service.getSdk(token);

  const data = await sdk.getMe();
  console.log(data);
}
```

## API

### getMe 
Returns basic information about the app.

### createInvoice
Use this method to create a new invoice. Returns object of created invoice.
* asset (String). Currency code.
  *  `BTC`
  *  `TON`
  *  `USDT`
  *  `USDC`
  *  `BUSD`
  *  `ETH` (only testnet)
* amount (String)
Amount of the invoice in float. For example: 125.50
* description (String)
Optional. Description of the invoice. Up to 1024 symbols.
* paidBtnName (String) default - callback
Optional. Paid button name. This button will be shown when your invoice was paid. 
  * `viewItem` - View Item
  * `openChannel` - Open Channel
  * `openBot` - Open Bot
  * `callback` - Return
* paidBtnUrl (String)
Optional but requried when you use paidBtnUrl. Paid button URL. You can set any payment success link (for example link on your bot). Start with https or http.
* payload (String, up to 1kb)
Optional. Some data. User ID, payment id, or any data you want to attach to the invoice.
* allowComments (Boolean)
Optional. Allow adding comments when paying an invoice. Default is true.
* allowAnonymous (Boolean)
Optional. Allow pay invoice as anonymous. Default is true.

### getInvoices
Use this method to get invoices of your app. On success, the returns array of invoices.
* asset (String)
Optional. Currency code.
  *  `BTC`
  *  `TON`
  *  `USDT`
  *  `USDC`
  *  `BUSD`
  *  `ETH` (only testnet)
* invoiceIds (String)
Optional. Invoice IDs separated by comma.
* status (String)
Optional. Status of invoices. Available statusses: active or paid. Default: all statusses.
* offset (Number)
Optional. Offset needed to return a specific subset of  invoices. Default 0.
* count (Number) 
Optional. Number of invoices to return. Default 100, max 1000.

### getPayments
Use this method to get paid and unconfirmed invoices of your app. On success, the returns array of paid and unconfirmed invoices.
* offset (Number)
Optional. Offset needed to return a specific subset of  invoices. Default 0.
* count (Number) 
Optional. Number of invoices to return. Default 100, max 1000.

### confirmPayment
Use this method to confirm paid invoice of your app. On success, the return confirmed invoice.
* invoiceId (Number)
Required. Invoice ID you want to confirm.

### getBalance
Use this method to get balance of your app. Returns array of assets.

### getExchangeRates
Use this method to get exchange rates of supported currencies. Returns array of currencies.

### getCurrencies
Use this method to get supported currencies. Returns array of currencies.
>>>>>>> a9c939859795d2c51b710f37d684616e597c77d5

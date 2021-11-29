const { default: axios } = require("axios");

const { TonService } = require("./tonService");
const { client, testClient } = require("./client");

const testTonSdk = new TonService({ client: testClient });
const tonSdk = new TonService({ client });

module.exports = {
  testTonSdk,
  tonSdk,
};
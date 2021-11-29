const { TonService } = require("./tonService");
const { client, testClient } = require("./client");

const testTonService = new TonService({ client: testClient });
const tonService = new TonService({ client });

module.exports = {
  TonServiceCreator: TonService,
  testTonService,
  tonService,
};

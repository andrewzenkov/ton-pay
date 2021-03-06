const { TonService } = require("./src/tonService");
const { client, testClient } = require("./src/client");

const testTonService = new TonService({ client: testClient });
const tonService = new TonService({ client });

module.exports = {
  TonServiceCreator: TonService,
  testTonService,
  tonService,
};

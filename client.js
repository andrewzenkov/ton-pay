const axios = require("axios");

const { config } = require("./config");

const testClient = axios.create({ baseURL: config.testBaseUrl });
const client = axios.create({ baseURL: config.baseUrl });

testClient.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err?.response?.data)
);

client.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err?.response?.data)
);

module.exports = {
  testClient,
  client,
};

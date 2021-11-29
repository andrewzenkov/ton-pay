class BaseMethod {
  url = "";
  token = "";
  client = null;

  constructor(client, token) {
    this.token = token;
    this.client = client;
  }

  getUrl() {
    return `app${this.token}${this.url}`;
  }

  resolveOptions(options) {
    this.options = options;

    return this;
  }
}

module.exports = {
  BaseMethod,
};

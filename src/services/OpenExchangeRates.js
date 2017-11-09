const OpenExchangeRates = {
  async getCurrencies() {
    return fetch('https://openexchangerates.org/api/currencies.json')
      .then(response => response.json());
  }
};

export default OpenExchangeRates;

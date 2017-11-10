const appId = 'ddc1d8d11f674d95b26b646f36b461da';
const base = 'USD';
let rates = {};

const OpenExchangeRates = {
  getRates() {
    return fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}`)
      .then(response => response.json())
      .then(data => {
        rates = data.rates;
        return rates;
      });
  }
};

export default OpenExchangeRates;

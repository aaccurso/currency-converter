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
  },
  convert({ fromAmount, fromCurrency, toCurrency }) {
    const rate = this.getRate(fromCurrency, toCurrency);

    return (parseFloat(fromAmount) * rate).toFixed(2);
  },
  // Returns the exchange rate to `target` currency from `base` currency
  getRate(from, to) {
    // Make sure the base rate is in the rates object:
    rates[base] = 1;

    // Throw an error if either rate isn't in the rates array
    if (!rates[to] || !rates[from]) throw "From and to missing";

    // If `from` currency === fx.base, return the basic exchange rate for the `to` currency
    if (from === base) {
      return rates[to];
    }

    // If `to` currency === fx.base, return the basic inverse rate of the `from` currency
    if (to === base) {
      return 1 / rates[from];
    }

    // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies
    return rates[to] * (1 / rates[from]);
  }
};

export default OpenExchangeRates;

const appId = 'ddc1d8d11f674d95b26b646f36b461da';
const base = 'USD';
let rates = {};

const OpenExchangeRates = {
  /**
   * Fetch current currencies
   * @return {Promise.<Array>}
   */
  async getCurrencies() {
    const response = await fetch('https://openexchangerates.org/api/currencies.json');
    return await response.json();
  },
  /**
   * Fetch current rates from Open Exchange Rates API
   * @return {Promise.<Array>}
   */
  async getRates() {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}`);
    const data = await response.json();

    rates = data.rates;

    return rates;
  },
  /**
   * Convert amount using current rate between currencies
   * @param {string} fromAmount
   * @param {string} fromCurrency
   * @param {string} toCurrency
   * @return {string}
   */
  convert({ fromAmount, fromCurrency, toCurrency }) {
    const rate = this.getRate(fromCurrency, toCurrency);

    return (parseFloat(fromAmount) * rate).toFixed(2).toString();
  },
  /**
   * Returns the exchange rate to `target` currency from `base` currency
   * @param {string} fromCurrency
   * @param {string} toCurrency
   * @return {number}
   */
  getRate(fromCurrency, toCurrency) {
    // Make sure the base rate is in the rates object:
    rates[base] = 1;

    // Throw an error if either rate isn't in the rates array
    if (!rates[toCurrency] || !rates[fromCurrency]) throw "From and to missing";

    // If `from` currency === fx.base, return the basic exchange rate for the `to` currency
    if (fromCurrency === base) {
      return rates[toCurrency];
    }

    // If `to` currency === fx.base, return the basic inverse rate of the `from` currency
    if (toCurrency === base) {
      return 1 / rates[fromCurrency];
    }

    // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies
    return rates[toCurrency] * (1 / rates[fromCurrency]);
  }
};

export default OpenExchangeRates;

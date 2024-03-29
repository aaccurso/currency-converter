import { AsyncStorage } from 'react-native';

const appId = 'ddc1d8d11f674d95b26b646f36b461da';
const base = 'USD';
let rates = {};

const OpenExchangeRates = {
    /**
     * Fetch current currencies
     * @return {Promise.<Array>}
     */
    async getCurrencies() {
        try {
            const response = await fetch('https://openexchangerates.org/api/currencies.json');
            const currencies = await response.json();
            await AsyncStorage.setItem('currencies', JSON.stringify(currencies));
            return currencies;
        } catch (error) {
            console.log('Error: getCurrencies', error.message); // eslint-disable-line no-console
            const currencies = await AsyncStorage.getItem('currencies');
            return JSON.parse(currencies);
        }
    },
    /**
     * Fetch current rates from Open Exchange Rates API
     * @return {Promise.<Object>}
     */
    async getRates() {
        try {
            const response = await fetch(
                `https://openexchangerates.org/api/latest.json?app_id=${appId}`
            );
            const data = await response.json();
            rates = data.rates;
            await AsyncStorage.setItem('rates', JSON.stringify(rates));
            return rates;
        } catch (error) {
            console.log('Error: getRates', error.message); // eslint-disable-line no-console
            const ratesString = await AsyncStorage.getItem('rates');
            rates = JSON.parse(ratesString);
            return rates;
        }
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
        if (!rates[toCurrency] || !rates[fromCurrency]) throw new Error('From and to missing');

        // If `from` currency === fx.base, return the basic exchange rate for the `to` currency
        if (fromCurrency === base) {
            return rates[toCurrency];
        }

        // If `to` currency === fx.base, return the basic inverse rate of the `from` currency
        if (toCurrency === base) {
            return 1 / rates[fromCurrency];
        }

        // Otherwise, return the `to` rate multiplied by the inverse of the `from` rate to get the
        // relative exchange rate between the two currencies
        return rates[toCurrency] * (1 / rates[fromCurrency]);
    }
};

export default OpenExchangeRates;

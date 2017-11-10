import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from 'components/Title';
import MoneyInput from 'components/MoneyInput';
import OpenExchangeRates from 'services/OpenExchangeRates';

export default class App extends React.Component {
  state = {
    fromCurrency: 'USD',
    fromAmount: '',
    toCurrency: 'ARS',
    toAmount: '',
    currencies: {}
  };

  onSelectFromCurrency = fromCurrency => this.setState({ fromCurrency }, this.onSubmit);
  onSelectToCurrency = toCurrency => this.setState({ toCurrency }, this.onSubmit);
  onFromAmountChange = fromAmount => this.setState({ fromAmount });
  onSubmit = () => {
    if (!this.state.fromAmount) return;
    const toAmount = OpenExchangeRates.convert(this.state);
    this.setState({ toAmount });
  };

  componentDidMount() {
    const getRatesPromise = OpenExchangeRates.getRates();
    const getCurrenciesPromise = OpenExchangeRates.getCurrencies();

    Promise.all([
        getCurrenciesPromise,
        getRatesPromise
      ])
      .then(([currencies]) => this.setState({ currencies }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Currency Converter</Title>
        <MoneyInput
          amount={this.state.fromAmount}
          selectedCurrency={this.state.fromCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectFromCurrency}
          onAmountChange={this.onFromAmountChange}
          placeholder={'Input some amount'}
          onSubmitAmount={this.onSubmit}
        />
        <MoneyInput
          amount={this.state.toAmount}
          selectedCurrency={this.state.toCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectToCurrency}
          editable={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

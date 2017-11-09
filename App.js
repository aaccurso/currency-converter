import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from 'components/Title';
import MoneyInput from 'components/MoneyInput';
import OpenExchangeRates from 'services/OpenExchangeRates';

export default class App extends React.Component {
  state = {
    fromCurrency: 'USD',
    toCurrency: 'ARS',
    currencies: []
  };

  onSelectFromCurrency = fromCurrency => this.setState({ fromCurrency });
  onSelectToCurrency = toCurrency => this.setState({ toCurrency });

  componentDidMount() {
    OpenExchangeRates.getCurrencies()
      .then(currencies => Object.keys(currencies))
      .then(currencies => {
        this.setState({
          currencies
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Currency Converter</Title>
        <MoneyInput
          selectedCurrency={this.state.fromCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectFromCurrency}
        />
        <MoneyInput
          selectedCurrency={this.state.toCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectToCurrency}
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

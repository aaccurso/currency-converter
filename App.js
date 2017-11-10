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
    currencies: []
  };

  onSelectFromCurrency = fromCurrency => this.setState({ fromCurrency });
  onSelectToCurrency = toCurrency => this.setState({ toCurrency });
  onFromAmountChange = fromAmount => this.setState({ fromAmount });
  onToAmountChange = toAmount => this.setState({ toAmount });

  componentDidMount() {
    OpenExchangeRates.getRates()
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
          amount={this.state.fromAmount}
          selectedCurrency={this.state.fromCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectFromCurrency}
          onAmountChange={this.onFromAmountChange}
          placeholder={'Input some amount'}
        />
        <MoneyInput
          amount={this.state.toAmount}
          selectedCurrency={this.state.toCurrency}
          currencies={this.state.currencies}
          onSelectCurrency={this.onSelectToCurrency}
          onAmountChange={this.onToAmountChange}
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

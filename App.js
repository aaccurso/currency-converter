import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from 'components/Title';
import MoneyInput from 'components/MoneyInput';
import OpenExchangeRates from 'services/OpenExchangeRates';

export default class App extends React.Component {
  state = {
    currencies: []
  };

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
        <MoneyInput currencies={this.state.currencies}/>
        <MoneyInput currencies={this.state.currencies}/>
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

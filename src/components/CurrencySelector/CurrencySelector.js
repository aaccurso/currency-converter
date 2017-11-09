import React from 'react';
import { StyleSheet, Button } from 'react-native';

const style = StyleSheet.create({
  currencySelector: {
    borderColor: 'gray',
    borderWidth: 1
  }
});

class CurrencySelector extends React.Component {
  onPress = () => alert('Currency Selector press');

  render() {
    return (
      <Button
        style={style.currencySelector}
        title={'USD'}
        accessibilityLabel={'Currency Selector'}
        onPress={this.onPress}
      />
    );
  }
}

export default CurrencySelector;

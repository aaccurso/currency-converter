import React from 'react';
import { StyleSheet, View } from 'react-native';
import AmountInput from 'components/AmountInput';
import CurrencySelector from 'components/CurrencySelector';

const style = StyleSheet.create({
  moneyInput: {
    flex: 1,
    maxHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class MoneyInput extends React.Component {
  render() {
    return (
      <View style={style.moneyInput}>
        <CurrencySelector/>
        <AmountInput placeholder={'Input some amount'}/>
      </View>
    );
  }
}

export default MoneyInput;

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import AmountInput from 'components/AmountInput';
import CurrencySelector from 'components/CurrencySelector';

const styles = StyleSheet.create({
  moneyInput: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});

const MoneyInput = props => (
  <View style={styles.moneyInput}>
    <CurrencySelector {...props}/>
    <AmountInput {...props}/>
  </View>
);

MoneyInput.propTypes = {
  amount: PropTypes.string,
  currencies: PropTypes.object,
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func,
  onAmountChange: PropTypes.func,
  onSubmitAmount: PropTypes.func
};

export default MoneyInput;

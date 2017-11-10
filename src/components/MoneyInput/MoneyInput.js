import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import AmountInput from 'components/AmountInput';
import CurrencySelector from 'components/CurrencySelector';

const style = StyleSheet.create({
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

class MoneyInput extends React.Component {
  render() {
    return (
      <View style={style.moneyInput}>
        <CurrencySelector {...this.props}/>
        <AmountInput {...this.props}/>
      </View>
    );
  }
}

MoneyInput.propTypes = {
  amount: PropTypes.string,
  currencies: PropTypes.object,
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func,
  onAmountChange: PropTypes.func,
  onSubmitAmount: PropTypes.func
};

export default MoneyInput;

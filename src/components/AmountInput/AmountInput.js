import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  amountInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

class AmountInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.amountInput}
        onChangeText={this.props.onAmountChange}
        value={this.props.amount}
        keyboardType={'numeric'}
        returnKeyType={'done'}
        onSubmitEditing={this.props.onSubmitAmount}
      />
    );
  }
}

AmountInput.propTypes = {
  amount: PropTypes.string,
  onAmountChange: PropTypes.func,
  onSubmitAmount: PropTypes.func
};

export default AmountInput;

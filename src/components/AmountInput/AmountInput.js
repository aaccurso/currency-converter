import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  amountInput: {
    height: 40,
    width: 200,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

class AmountInput extends React.Component {
  state = { amount: '' };

  onChangeAmount = amount => this.setState({amount});

  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.amountInput}
        onChangeText={this.onChangeAmount}
        keyboardType={'numeric'}
        value={this.state.amount}
        returnKeyType={'done'}
      />
    );
  }
}

export default AmountInput;

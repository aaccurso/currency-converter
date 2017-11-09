import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  amountInput: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1
  }
});

class AmountInput extends React.Component {
  state = { amount: '0' };

  onChangeAmount = amount => this.setState({amount});

  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.amountInput}
        onChangeText={this.onChangeAmount}
        keyboardType={'numeric'}
        value={this.state.amount}
        selectTextOnFocus={true}
        returnKeyType={'done'}
      />
    );
  }
}

export default AmountInput;

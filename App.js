import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from 'components/Title';
import MoneyInput from 'components/MoneyInput';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>Currency Converter</Title>
        <MoneyInput/>
        <MoneyInput/>
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

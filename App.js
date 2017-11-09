import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MoneyInput from 'components/MoneyInput';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Currency Converter</Text>
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

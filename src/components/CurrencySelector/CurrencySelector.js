import React from 'react';
import { View, Modal, Button, FlatList } from 'react-native';

class CurrencySelector extends React.Component {
  state = {
    modalVisible: false,
    selectedCurrency: 'USD',
    currencies: []
  };

  showModal = () => this.setState({ modalVisible: true });

  selectCurrency = currency => this.setState({ modalVisible: false, selectedCurrency: currency });

  componentWillReceiveProps({currencies}) {
    this.setState({
      currencies: currencies.map(currency => ({ key: currency }))
    });
  }

  render() {
    return (
      <View>
        <Button
          title={this.state.selectedCurrency}
          accessibilityLabel={'Currency Selector'}
          onPress={this.showModal}
        />
        <Modal visible={this.state.modalVisible}>
          <View>
            <FlatList
              data={this.state.currencies}
              renderItem={({item}) => <Button title={item.key} onPress={this.selectCurrency.bind(this, item.key)}/>}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default CurrencySelector;

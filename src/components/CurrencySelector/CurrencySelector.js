import React from 'react';
import { View, Modal, Button, FlatList } from 'react-native';

class CurrencySelector extends React.Component {
  state = {
    modalVisible: false,
    currencies: []
  };

  showModal = () => this.setState({ modalVisible: true });

  hideModal = () => this.setState({ modalVisible: false });

  componentWillReceiveProps({currencies}) {
    this.setState({
      currencies: currencies.map(currency => ({ key: currency }))
    });
  }

  render() {
    return (
      <View>
        <Button
          title={'USD'}
          accessibilityLabel={'Currency Selector'}
          onPress={this.showModal}
        />
        <Modal visible={this.state.modalVisible}>
          <View>
            <FlatList
              data={this.state.currencies}
              renderItem={({item}) => <Button title={item.key} onPress={this.hideModal}/>}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default CurrencySelector;

import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Button, FlatList } from 'react-native';

class CurrencySelector extends React.Component {
  state = {
    modalVisible: false,
    currencies: []
  };

  showModal = () => this.setState({ modalVisible: true });

  onSelectCurrency = currency => {
    this.setState({ modalVisible: false });
    this.props.onSelectCurrency(currency);
  };

  componentWillReceiveProps({currencies}) {
    this.setState({
      currencies: currencies.map(currency => ({ key: currency }))
    });
  }

  render() {
    return (
      <View>
        <Button
          title={this.props.selectedCurrency}
          accessibilityLabel={'Currency Selector'}
          onPress={this.showModal}
        />
        <Modal visible={this.state.modalVisible}>
          <View>
            <FlatList
              data={this.state.currencies}
              renderItem={({item}) => <Button title={item.key} onPress={this.onSelectCurrency.bind(this, item.key)}/>}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

CurrencySelector.propTypes = {
  currencies: PropTypes.array,
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func
};

export default CurrencySelector;

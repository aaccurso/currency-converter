import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Modal, Button, FlatList } from 'react-native';

const style = StyleSheet.create({
  modalContainer: {
    marginTop: 20
  }
});

class CurrencySelector extends React.Component {
  state = {
    modalVisible: false,
    currencies: []
  };

  showModal = () => this.setState({ modalVisible: true });

  closeModal = () => this.setState({ modalVisible: false });

  onSelectCurrency = currency => {
    this.closeModal();
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
          accessibilityLabel={'Open Currency Selector'}
          onPress={this.showModal}
        />
        <Modal visible={this.state.modalVisible}>
          <View style={style.modalContainer}>
            <Button
              color={'red'}
              title={'Close'}
              accessibilityLabel={'Close Currency Selector'}
              onPress={this.closeModal}
            />
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

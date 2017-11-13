import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Modal, Button, FlatList } from 'react-native';
import TextButton from 'components/TextButton';

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
    const currencyCodes = Object.keys(currencies);
    const mappedCurrencies = currencyCodes.map(currencyCode => (
      {
        key: currencyCode,
        currencyLabel: `${currencyCode} – ${currencies[currencyCode]}`
      }
    ));

    this.setState({
      currencies: mappedCurrencies
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
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={style.modalContainer}>
            <TextButton
              color={'red'}
              title={'Close'}
              accessibilityLabel={'Close Currency Selector'}
              onPress={this.closeModal}
            />
            <FlatList
              data={this.state.currencies}
              renderItem={
                ({item}) => (
                  <TextButton
                    title={item.currencyLabel}
                    onPress={this.onSelectCurrency.bind(this, item.key)}
                  />
                )
              }
            />
          </View>
        </Modal>
      </View>
    );
  }
}

CurrencySelector.propTypes = {
  currencies: PropTypes.object,
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func
};

export default CurrencySelector;

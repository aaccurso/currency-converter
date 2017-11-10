import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View, Modal, Button, FlatList } from 'react-native';

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

  currencyButtonProps = {
    ...Platform.select({
      android: {
        color: 'gray'
      }
    })
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
        currencyLabel: `${currencies[currencyCode]} (${currencyCode})`
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
            <Button
              color={'red'}
              title={'Close'}
              accessibilityLabel={'Close Currency Selector'}
              onPress={this.closeModal}
            />
            <FlatList
              data={this.state.currencies}
              renderItem={
                ({item}) => (
                  <Button
                    {...this.currencyButtonProps}
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

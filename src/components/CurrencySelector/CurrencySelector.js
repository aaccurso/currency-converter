import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Platform, View, Modal, Button, FlatList } from 'react-native';
import TextButton from 'components/TextButton';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 20
            }
        })
    }
});

class CurrencySelector extends React.Component {
    componentWillReceiveProps({ currencies }) {
        const currencyCodes = Object.keys(currencies);
        const mappedCurrencies = currencyCodes.map(currencyCode => ({
            key: currencyCode,
            currencyLabel: `${currencyCode} – ${currencies[currencyCode]}`
        }));

        this.setState({
            currencies: mappedCurrencies
        });
    }

    state = {
        modalVisible: false,
        currencies: []
    };

    handleShowModal = () => this.setState({ modalVisible: true });

    handleCloseModal = () => this.setState({ modalVisible: false });

    handleSelectCurrency = currency => {
        this.handleCloseModal();
        this.props.onSelectCurrency(currency);
    };

    render() {
        return (
            <View>
                <Button
                    title={this.props.selectedCurrency}
                    accessibilityLabel={'Open Currency Selector'}
                    onPress={this.handleShowModal}
                />
                <Modal visible={this.state.modalVisible} onRequestClose={this.handleCloseModal}>
                    <View style={styles.modalContainer}>
                        <TextButton
                            color={'red'}
                            title={'Close'}
                            accessibilityLabel={'Close Currency Selector'}
                            onPress={this.handleCloseModal}
                        />
                        <FlatList
                            data={this.state.currencies}
                            renderItem={({ item }) => (
                                <TextButton
                                    title={item.currencyLabel}
                                    onPress={this.handleSelectCurrency.bind(this, item.key)}
                                />
                            )}
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

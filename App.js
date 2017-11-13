import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image } from 'react-native';
import MoneyInput from 'components/MoneyInput';
import OpenExchangeRates from 'services/OpenExchangeRates';
import TextButton from 'components/TextButton';
import { white } from 'constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: white
    }
});

export default class App extends React.Component {
    componentDidMount() {
        const getRatesPromise = OpenExchangeRates.getRates();
        const getCurrenciesPromise = OpenExchangeRates.getCurrencies();

        Promise.all([getCurrenciesPromise, getRatesPromise]).then(([currencies]) =>
            this.setState({ currencies })
        );
    }

    state = {
        fromCurrency: 'USD',
        fromAmount: '',
        toCurrency: 'ARS',
        toAmount: '',
        currencies: {}
    };

    handleSelectFromCurrency = fromCurrency => this.setState({ fromCurrency }, this.handleSubmit);
    handleSelectToCurrency = toCurrency => this.setState({ toCurrency }, this.handleSubmit);
    handleFromAmountChange = fromAmount => this.setState({ fromAmount });
    handleSubmit = () => {
        if (!this.state.fromAmount) return this.setState({ toAmount: '' });
        const toAmount = OpenExchangeRates.convert(this.state);
        this.setState({ toAmount });
    };
    handleReverseCurrencies = () => {
        this.setState(
            {
                toCurrency: this.state.fromCurrency,
                fromCurrency: this.state.toCurrency
            },
            this.handleSubmit
        );
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                <Image source={require('assets/exchange.png')} />
                <View style={styles.formContainer}>
                    <MoneyInput
                        amount={this.state.fromAmount}
                        selectedCurrency={this.state.fromCurrency}
                        currencies={this.state.currencies}
                        onSelectCurrency={this.handleSelectFromCurrency}
                        onAmountChange={this.handleFromAmountChange}
                        placeholder={'Input some amount'}
                        onSubmitAmount={this.handleSubmit}
                    />
                    <MoneyInput
                        amount={this.state.toAmount}
                        selectedCurrency={this.state.toCurrency}
                        currencies={this.state.currencies}
                        onSelectCurrency={this.handleSelectToCurrency}
                        placeholder={'Conversion result'}
                        editable={false}
                        withClipboard
                    />
                    <TextButton
                        title={'Reverse currencies'}
                        onPress={this.handleReverseCurrencies}
                        underlined
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

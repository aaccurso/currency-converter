import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View, TextInput, Clipboard, Alert } from 'react-native';
import CopyToClipboardButton from 'components/CopyToClipboardButton';

const styles = StyleSheet.create({
    amountInput: {
        height: 40,
        width: 200,
        paddingLeft: 10,
        paddingRight: 10,
        ...Platform.select({
            ios: {
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5
            }
        })
    },
    copyToClipboard: {
        position: 'absolute',
        right: 5,
        top: 5
    }
});

const CopyToClipboard = props => (
    <View style={styles.copyToClipboard}>
        <CopyToClipboardButton {...props} icon={'copy'} />
    </View>
);

class AmountInput extends React.Component {
    handleCopyToClipboard = () => {
        if (!this.props.amount) return;
        try {
            Clipboard.setString(this.props.amount);
            Alert.alert('Copied!', this.props.amount);
        } catch (error) {
            console.log('Clipboard:error', error); // eslint-disable-line no-console
        }
    };

    render() {
        return (
            <View>
                <TextInput
                    {...this.props}
                    style={styles.amountInput}
                    onChangeText={this.props.onAmountChange}
                    value={this.props.amount}
                    keyboardType={'numeric'}
                    returnKeyType={'done'}
                    onSubmitEditing={this.props.onSubmitAmount}
                />
                {this.props.withClipboard && (
                    <CopyToClipboard onPress={this.handleCopyToClipboard} />
                )}
            </View>
        );
    }
}

AmountInput.propTypes = {
    amount: PropTypes.string,
    onAmountChange: PropTypes.func,
    onSubmitAmount: PropTypes.func,
    withClipboard: PropTypes.bool
};

export default AmountInput;

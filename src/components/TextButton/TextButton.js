import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Platform, Text, TouchableOpacity } from 'react-native';
import { iOSDefaultButtonColor } from 'constants/colors';

const styles = StyleSheet.create({
    textButton: {
        textAlign: 'center',
        fontSize: 16,
        padding: 12
    }
});

const TextButton = props => {
    const textButtonStyle = StyleSheet.flatten([
        styles.textButton,
        {
            color: props.color,
            textDecorationLine: props.underlined ? 'underline' : 'none'
        }
    ]);

    return (
        <TouchableOpacity
            accessible
            accessibilityLabel={props.accessibilityLabel || props.title}
            onPress={props.onPress}
        >
            <Text style={textButtonStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};

TextButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    accessibilityLabel: PropTypes.string,
    color: PropTypes.string,
    underlined: PropTypes.bool
};

TextButton.defaultProps = {
    color: Platform.select({
        android: 'gray',
        ios: iOSDefaultButtonColor
    })
};

export default TextButton;

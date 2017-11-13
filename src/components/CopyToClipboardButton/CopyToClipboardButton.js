import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    touchContainer: {
        padding: 5
    },
    iconButton: {
        width: 20,
        height: 20
    }
});

const CopyToClipboardButton = props => (
    <TouchableOpacity style={styles.touchContainer} onPress={props.onPress}>
        <Image style={styles.iconButton} source={require('assets/copy.png')} />
    </TouchableOpacity>
);

CopyToClipboardButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired
};

export default CopyToClipboardButton;

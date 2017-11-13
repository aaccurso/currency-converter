import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        width: 250,
        paddingBottom: 40,
        textAlign: 'center'
    }
});

const Title = props => <Text style={styles.title}>{props.children}</Text>;

Title.propTypes = {
    children: PropTypes.string.isRequired
};

export default Title;

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

class TextButton extends React.PureComponent {
  render() {
    const textButtonStyle = StyleSheet.flatten([
      styles.textButton,
      {
        color: this.props.color,
        textDecorationLine: this.props.underlined ? 'underline' : 'none'
      }
    ]);

    return (
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={this.props.accessibilityLabel || this.props.title}
        onPress={this.props.onPress}
      >
        <Text style={textButtonStyle}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

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

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  textButton: {
    textAlign: 'center',
    fontSize: 14,
    padding: 12
  }
});

class TextButton extends React.PureComponent {
  render() {
    const textButtonStyle = StyleSheet.flatten([
      style.textButton,
      {
        color: this.props.color
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
  color: PropTypes.string
};

export default TextButton;

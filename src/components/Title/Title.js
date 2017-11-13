import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    width: 250,
    paddingBottom: 40,
    textAlign: 'center'
  }
});

class Title extends React.Component {
  render() {
    return (
      <Text style={styles.title}>
        {this.props.children}
      </Text>
    );
  }
}

export default Title;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

const Hello = ({ children }) => (
  <View>
    <Text style={styles.text}>{children}</Text>
  </View>
);

Hello.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
  },
});

export default Hello;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { string } from 'prop-types';

const Button = ({ label }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: '#fff',
  },
});

Button.propTypes = {
  label: string.isRequired,
};

export default Button;

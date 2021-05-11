import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#157',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});

const CircleButton = ({ children }) => (
  <View style={styles.circleButton}>
    <Text style={styles.circleButtonLabel}>{children}</Text>
  </View>
);

CircleButton.propTypes = {
  children: string.isRequired,
};

export default CircleButton;

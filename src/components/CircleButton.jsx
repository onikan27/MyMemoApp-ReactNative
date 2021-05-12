import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

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

const CircleButton = ({ style, name, onPress }) => (
  <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
    <Feather name={name} size={32} color="white" />
  </TouchableOpacity>
);

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

export default CircleButton;

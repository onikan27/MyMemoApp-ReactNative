import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import AppBar from '../components/AppBar';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Text>Log In</Text>
        <TextInput value="Email Address" />
        <TextInput value="Password" />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not registered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default LoginScreen;

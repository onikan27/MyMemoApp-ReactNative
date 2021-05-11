import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#157',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const AppBar = () => (
  <View style={styles.appbar}>
    <View style={styles.appbarInner}>
      <Text style={styles.appbarTitle}>MemoAPP</Text>
      <Text style={styles.appbarRight}>ログアウト</Text>
    </View>
  </View>
);

export default AppBar;

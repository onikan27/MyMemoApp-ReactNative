import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

const MemoListScreen = ({ navigation }) => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
    const unsubscribe = ref.onSnapshot((snapshot) => {
      const userMemos = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        userMemos.push({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
      setMemos(userMemos);
    }, (error) => {
      console.log(error);
      Alert.alert(error);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default MemoListScreen;

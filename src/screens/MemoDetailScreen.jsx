import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  shape,
  string,
} from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import dateToString from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#157',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },
  memoTitle: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff',
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
});

const MemoDetailScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
    const unsubscribe = ref.onSnapshot((doc) => {
      const data = doc.data();
      setMemo({
        id: doc.id,
        bodyText: data.bodyText,
        updatedAt: data.updatedAt.toDate(),
      });
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, buttom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
};

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default MemoDetailScreen;

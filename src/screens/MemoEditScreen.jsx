import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

const MemoEditScreen = ({ navigation, route }) => {
  const { id, bodyText } = route.params;
  const [body, setbody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
    ref.set({
      bodyText: body,
      updatedAt: new Date(),
    }, { merge: true })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => setbody(text)}
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
};

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};

export default MemoEditScreen;

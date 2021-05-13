import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});

const MemoList = ({ memos }) => {
  const navigation = useNavigation();

  return (
    <View>
      {memos.map((memo) => {
        return (
          <TouchableOpacity
            style={styles.memoListItem}
            onPress={() => { navigation.navigate('MemoDetail'); }}
            key={memo.id}
          >
            <View>
              <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
              <Text style={styles.memoListItemDate}>{String(memo.updatedAt)}</Text>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert('hoge')}
              style={styles.memoDelete}
            >
              <Feather name="x" size={16} color="#B0B0B0" />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

export default MemoList;

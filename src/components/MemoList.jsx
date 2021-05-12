import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

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
});

const MemoList = () => (
  <View>
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2021年5月11日 15:50</Text>
      </View>
      <TouchableOpacity>
        <Feather name="x" size={16} color="#B0B0B0" />
      </TouchableOpacity>
    </View>

    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>ミーティング</Text>
        <Text style={styles.memoListItemDate}>2021年5月11日 15:50</Text>
      </View>
      <TouchableOpacity>
        <Feather name="x" size={16} color="#B0B0B0" />
      </TouchableOpacity>
    </View>

    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>トレーニング</Text>
        <Text style={styles.memoListItemDate}>2021年5月11日 15:50</Text>
      </View>
      <TouchableOpacity>
        <Feather name="x" size={16} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  </View>
);

export default MemoList;

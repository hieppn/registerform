import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from './Item';

export default function List(props) {
  const [data] = useState(props.data);

  return (
    <View style={style.listGroup}>
      <FlatList data={data} renderItem={(i) => <Item data={i} />} keyExtractor={(i) => i.id} />
    </View>
  );
}
const style = StyleSheet.create({
  listGroup: {
    flex: 8,
  },
});

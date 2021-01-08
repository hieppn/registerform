import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Item(props) {
  const data = props.data.item;
  return (
    <View style={style.itemGroup}>
      <View style={style.leftGroup}>
        <TouchableOpacity onPress={props.check}>
          <Image
            style={style.checkIcon}
            source={data.isChecked ? require('../image/tick.png') : require('../image/notick.png')}
          />
        </TouchableOpacity>
        <Text style={[style.title, data.isChecked && style.titleChecked]}>{data.title}</Text>
      </View>
      <TouchableOpacity onPress={props.remove}>
        <Image style={style.delete} source={require('../image/delete.png')} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  itemGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e9ecef',
    height: 70,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkIcon: {
    height: 25,
    width: 25,
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  titleChecked: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  delete: {
    height: 25,
    width: 25,
    margin: 10,
  },
});

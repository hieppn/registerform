import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Input() {
  return (
    <View style={style.inputGroup}>
      <TextInput style={style.input} />
      <TouchableOpacity onPress={} style={style.image}>
        <Image style={style.icon} source={require('../image/plus.png')} />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  inputGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e3e6ea',
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '60%',
    height: '60%',
  },
});

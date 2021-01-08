/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from './store/actions';

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { counter, name } = data;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonClick} onPress={() => dispatch(addition())}>
        <Text style={styles.txtButton}>Tăng</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          margin: 13,
          fontSize: 50,
          fontWeight: 'bold',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {data}
      </Text>
      <TouchableOpacity style={styles.buttonClick} onPress={() => dispatch(subtraction())}>
        <Text style={styles.txtButton}>Giảm</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClick: {
    width: 70,
    height: 40,
    marginVertical: 20,
    backgroundColor: 'red',
    color: 'white',
    justifyContent: 'center',
  },
  txtButton: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

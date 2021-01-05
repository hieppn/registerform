/* eslint-disable react-native/no-raw-text */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const useEffectExample = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('Test', count);
  });
  return (
    <View style={styles.container}>
      <Text> {count}</Text>
      <TouchableOpacity
        title="Update count"
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.bt}
      >
        <Text style={styles.textBT}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bt: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    alignContent: 'center',
  },
  textBT: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default useEffectExample;

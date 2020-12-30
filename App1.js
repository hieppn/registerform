import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const YourApp = () => {
  const [output, setOutput] = useState('0');
  const getOutput = (x) => {
    let data = output;
    if (data == '0') {
      data = '';
      data += x;
    } else {
      data += x;
    }
    setOutput(data);
  };
  const evil = (data) => {
    return new Function('return ' + data)();
  };
  const cal = () => {
    let data = output;
    console.log(data);
    console.log(evil(data));
    setOutput(evil(data));
  };
  const clear = () => {
    setOutput(0);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerResult}>
        <Text style={styles.textResult}>{output}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.clearButton} onPress={() => clear()}>
          <Text style={styles.textButtonClear}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.divideButton}
          onPress={() => getOutput('/')}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('7')}>
          <Text style={styles.textNumberButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('8')}>
          <Text style={styles.textNumberButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          // eslint-disable-next-line prettier/prettier
          onPress={() => getOutput('9')}>
          <Text style={styles.textNumberButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.divideButton}
          onPress={() => getOutput('-')}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('4')}>
          <Text style={styles.textNumberButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('5')}>
          <Text style={styles.textNumberButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('6')}>
          <Text style={styles.textNumberButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.divideButton}
          onPress={() => getOutput('+')}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('1')}>
          <Text style={styles.textNumberButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('2')}>
          <Text style={styles.textNumberButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => getOutput('3')}>
          <Text style={styles.textNumberButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton} onPress={() => cal()}>
          <Text style={styles.textButton}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerResult: {
    backgroundColor: '#433333',
  },
  textResult: {
    height: 250,
    textAlign: 'right',
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  clearButton: {
    width: '75%',
    height: 130,
    backgroundColor: 'white',
    borderColor: '#920F29',
  },
  divideButton: {
    width: '25%',
    height: 130,
    backgroundColor: '#F2274F',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  numberButton: {
    width: '25%',
    height: 130,
    backgroundColor: 'white',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  textButtonClear: {
    color: 'black',
    fontSize: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: '#920F29',
    borderWidth: 1,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textNumberButton: {
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default YourApp;

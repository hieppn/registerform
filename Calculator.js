/* eslint-disable no-new-func */
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const YourApp = () => {
  const [output, setOutput] = useState('0');
  const getOutput = (x) => {
    let data = output;
    if (data === '0') {
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
    if (data.length > 0) {
      if (
        data.slice(-1) === '/' ||
        data.slice(-1) === '*' ||
        data.slice(-1) === '+' ||
        data.slice(-1) === '-'
      ) {
        data = data.slice(0, -1);
        setOutput(data);
      } else {
        setOutput(evil(data));
      }
    }
  };
  const clear = () => {
    setOutput(0);
  };
  const del = () => {
    let data = output;
    if (data.length > 0) {
      data = data.slice(0, -1);
    }
    if (data.length === 0) {
      data = 0;
    }
    setOutput(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerResult} horizontal>
        <Text
          style={[
            styles.textResult,
            output.length > 7 && styles.textResultMedium,
            output.length > 14 && styles.textResultSmall,
            output.length > 28 && styles.textResultTidy,
          ]}
        >
          {output}
        </Text>
      </View>
      <View style={styles.row}>
        {/* {renderCell('1')} */}
        <Cell
          value={'Clear'}
          onPress={clear}
          styles={styles.clearButton}
          styleText={styles.textButtonClear}
        />
        <Cell
          value={'/'}
          onPress={getOutput}
          styles={styles.divideButton}
          styleText={styles.textButton}
        />
      </View>
      <View style={styles.row}>
        <Cell
          value={'7'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'8'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'9'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'-'}
          onPress={getOutput}
          styles={styles.divideButton}
          styleText={styles.textButton}
        />
      </View>
      <View style={styles.row}>
        <Cell
          value={'4'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'5'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'6'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'+'}
          onPress={getOutput}
          styles={styles.divideButton}
          styleText={styles.textButton}
        />
      </View>
      <View style={styles.row}>
        <Cell
          value={'1'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'2'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'3'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'*'}
          onPress={getOutput}
          styles={styles.divideButton}
          styleText={styles.textButton}
        />
      </View>
      <View style={styles.row}>
        <Cell
          value={'0'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'.'}
          onPress={getOutput}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'D'}
          onPress={del}
          styles={styles.numberButton}
          styleText={styles.textNumberButton}
        />
        <Cell
          value={'='}
          onPress={cal}
          styles={styles.divideButton}
          styleText={styles.textButton}
        />
      </View>
    </View>
  );
};
const Cell = ({ value, onPress, styles, styleText }) => {
  const getData = () => {
    onPress && onPress(value);
  };
  return (
    <TouchableOpacity onPress={getData} style={[{}, styles]}>
      <Text style={[{}, styleText]}>{value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerResult: {
    backgroundColor: '#433333',
    height: 250,
  },
  textResult: {
    textAlign: 'right',
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textResultMedium: {
    textAlign: 'right',
    fontSize: 90,
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textResultSmall: {
    textAlign: 'right',
    fontSize: 70,
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textResultTidy: {
    textAlign: 'right',
    fontSize: 40,
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  row: { flexDirection: 'row', height: 'auto' },
  container: {
    flex: 1,
  },
  clearButton: {
    width: '75%',
    backgroundColor: 'white',
    borderColor: '#920F29',
  },
  divideButton: {
    width: '25%',
    backgroundColor: '#F2274F',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  numberButton: {
    width: '25%',
    backgroundColor: 'white',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  textButtonClear: {
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: '#920F29',
    borderWidth: 1,
    fontSize: 70,
  },
  textButton: {
    fontSize: 70,
    textAlignVertical: 'center',
    color: 'white',
    textAlign: 'center',
  },
  textNumberButton: {
    fontSize: 70,
    textAlignVertical: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default YourApp;

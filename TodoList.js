import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import Item from './toDoList/Item';

const d = [
  {
    id: 1,
    title: 'hi',
    isChecked: true,
  },
  {
    id: 2,
    title: 'hello',
    isChecked: false,
  },
];
export default function TodoList() {
  const [preInput, setPreInput] = useState('');
  const [data, setData] = useState(d);
  const add = () => {
    let k = [...data];
    if (preInput !== '') {
      !k.length
        ? k.push({ id: 1, title: preInput, isChecked: false })
        : k.push({
            id: k[k.length - 1].id + 1,
            title: preInput,
            isChecked: false,
          });
      setData(k);
      setPreInput('');
    }
  };
  const check = (id) => {
    let k = [...data];
    for (let i = 0; i < k.length; i++) {
      if (k[i].id === id) {
        k[i].isChecked = !k[i].isChecked;
      }
    }
    setData(k);
  };
  const remove = (id) => {
    let k = [...data];
    for (var i = 0; i < k.length; i++) {
      if (k[i].id === id) {
        break;
      }
    }
    k.splice(i, 1);
    setData(k);
  };
  const onChange = (text) => {
    setPreInput(text);
  };
  return (
    <View style={style.container}>
      <View style={style.inputGroup}>
        <TextInput
          style={style.input}
          value={preInput}
          onChangeText={(text) => onChange(text)}
          placeholder="Enter Todo"
        />
        <TouchableOpacity onPress={() => add()} style={style.image}>
          <Image style={style.icon} source={require('./image/plus.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.listGroup}>
        {!data.length && <Text>Please add new tasks</Text>}
        <FlatList
          data={data}
          renderItem={(i) => (
            <Item remove={() => remove(i.item.id)} check={() => check(i.item.id)} data={i} />
          )}
          keyExtractor={(i) => i.id}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputGroup: {
    height: 70,
    flexDirection: 'row',
  },
  input: {
    flex: 4,
    borderWidth: 1,
    borderColor: '#e3e6ea',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#e9ecef',
    borderWidth: 1,
    borderColor: '#e3e6ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    width: '60%',
    height: '60%',
  },
  listGroup: {
    flex: 8,
    marginTop: 10,
  },
});

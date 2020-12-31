import React from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import plus from './image/plus.png';
const DATA = [
  {
    id: '1',
    title: 'Eat',
  },
  {
    id: '2',
    title: 'Sleep',
  },
  {
    id: '3',
    title: 'Run',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.checkButton}>
      <Image source={plus} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.deleteButton}>
      <Image source={plus} />
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.main}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputTodo} placeholder="Enter todo" />
        <TouchableOpacity style={styles.addButton} />
      </View>
      <ScrollView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  inputView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 1,
  },
  checkButton: {
    marginRight: 10,
  },
  deleteButton: {
    marginLeft: 200,
    textAlign:
  },
  inputTodo: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 370,
    paddingStart: 10,
  },
  addButton: {
    marginLeft: -45,
    marginTop: 13,
  },
  item: {
    backgroundColor: 'white',
    paddingBottom: 10,
    color: 'black',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 4,
  },
  title: {
    fontSize: 20,
  },
});

export default App;

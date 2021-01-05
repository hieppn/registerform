import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TodoList from './TodoList';
import Calculator from './Calculator';
import RegisterForm from './RegisterForm';
import useEffect from './useEffect/useEffect';

// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.button}>
        <Button
          title="Push ToDoList Screen"
          color="#33a5c6"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'ToDoList',
                options: {
                  topBar: {
                    title: {
                      text: 'ToDoList',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Push UseEffect Screen"
          color="pink"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'useEffect',
                options: {
                  topBar: {
                    title: {
                      text: 'useEffect',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Push Calculator Screen"
          color="blue"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Calculator',
                options: {
                  topBar: {
                    title: {
                      text: 'Calculator',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Push Register Screen"
          color="#eb726b"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'RegisterForm',
                options: {
                  topBar: {
                    title: {
                      text: 'RegisterForm',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: 'lightyellow',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('ToDoList', () => TodoList);
Navigation.registerComponent('Calculator', () => Calculator);
Navigation.registerComponent('RegisterForm', () => RegisterForm);
Navigation.registerComponent('useEffect', () => useEffect);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  button: {
    marginBottom: 50,
  },
});

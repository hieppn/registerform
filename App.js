// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import TodoList from './TodoList';
// import Calculator from './Calculator';
// import RegisterForm from './RegisterForm';
// import FirstScreen from './FirstScreen';

// // Home screen declaration
// const HomeScreen = (props) => {
//   return (
//     <View style={styles.root}>
//       <View style={styles.button}>
//         <Button
//           title="Push ToDoList Screen"
//           color="#33a5c6"
//           onPress={() =>
//             Navigation.push(props.componentId, {
//               component: {
//                 name: 'ToDoList',
//                 options: {
//                   topBar: {
//                     title: {
//                       text: 'ToDoList',
//                     },
//                   },
//                 },
//               },
//             })
//           }
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           title="Push FirstScreen Screen"
//           color="#FF6347"
//           onPress={() =>
//             Navigation.push(props.componentId, {
//               component: {
//                 name: 'FirstScreen',
//                 options: {
//                   topBar: {
//                     title: {
//                       text: 'FirstScreen',
//                     },
//                   },
//                 },
//               },
//             })
//           }
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           title="Push Calculator Screen"
//           color="blue"
//           onPress={() =>
//             Navigation.push(props.componentId, {
//               component: {
//                 name: 'Calculator',
//                 options: {
//                   topBar: {
//                     title: {
//                       text: 'Calculator',
//                     },
//                   },
//                 },
//               },
//             })
//           }
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           style={styles.button}
//           title="Push Register Screen"
//           color="#00FA9A"
//           onPress={() =>
//             Navigation.push(props.componentId, {
//               component: {
//                 name: 'RegisterForm',
//                 options: {
//                   topBar: {
//                     title: {
//                       text: 'RegisterForm',
//                     },
//                   },
//                 },
//               },
//             })
//           }
//         />
//       </View>
//     </View>
//   );
// };
// HomeScreen.options = {
//   topBar: {
//     title: {
//       text: 'Home',
//       color: 'white',
//     },
//     background: {
//       color: 'lightyellow',
//     },
//   },
// };

// Navigation.registerComponent('Home', () => HomeScreen);
// Navigation.registerComponent('ToDoList', () => TodoList);
// Navigation.registerComponent('Calculator', () => Calculator);
// Navigation.registerComponent('RegisterForm', () => RegisterForm);
// Navigation.registerComponent('FirstScreen', () => FirstScreen);
// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Home',
//             },
//           },
//         ],
//       },
//     },
//   });
// });

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 30,
//   },
//   button: {
//     marginBottom: 50,
//   },
// });
import React from 'react';
import Counter from './src/Counter';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const HomeScreen = (props) => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default HomeScreen;

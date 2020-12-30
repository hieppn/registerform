/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import closeImg from './image/cancel.png';
import visibility from './image/visibility.png';
import witness from './image/witness.png';

const App = () => {
  const [isShow, setShow] = useState(true);
  const [isShowPass, setShowPass] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Image style={styles.closeImage} source={closeImg} />
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <ItemInput title="Tên người dùng*" />
      <ItemInput title="Email*" />
      <ItemInput title="Số điện thoại*" />
      <ItemInput title="Tên tài khoản*" />
      <PassWordInput
        title="Mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
      />
      <PassWordInput
        title="Xác nhận mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
      />
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với{' '}
        <Text style={{color: '#25969E'}}>điều khoản quy định</Text> của chúng
        tôi
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  layoutTitle: {
    flex: 0.7,
    flexDirection: 'row',
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 25,
    marginLeft: '32%',
  },
  layoutInput: {
    flex: 1,
    // marginTop:15
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
});
export default App;

const ItemInput = (props) => {
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const PassWordInput = (props) => {
  const [isShowPass, setShowPass] = useState(true);
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput secureTextEntry={isShowPass} style={styles.textInput} />
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => {
          setShowPass(!isShowPass);
        }}>
        {/* <Image source={(isShowPass) ? {props.imageClose} : {props.imageOpen}} /> */}
        <Image source={props.imageClose} />
      </TouchableOpacity>
    </View>
  );
};

/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import closeImg from './image/cancel.png';
import visibility from './image/visibility.png';
import witness from './image/witness.png';
import ItemInput from './InputItem';
import PassWordInput from './PasswordInput';

const LoginForm = () => {
  const [] = useState(true);
  const [] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const SignUp = () => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      username === '' ||
      pass === '' ||
      confirm === ''
    ) {
      alert('Vui lòng nhập đầy đủ trong tin.');
    } else {
      if (pass === confirm) {
        alert(
          'Bạn đã đăng kí một tài khoản mới:\n Tên: ' +
            name +
            '\n Email: ' +
            email +
            '\n Phone: ' +
            phone +
            '\n Username: ' +
            username +
            '\n Password: ' +
            pass +
            '.',
        );
      } else {
        alert('Vui lòng xác nhận mật khẩu.');
      }
    }
  };
  const Login = () => {
    alert('Vui lòng đăng kí tài khoản.');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Image style={styles.closeImage} source={closeImg} />
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <ItemInput title="Tên người dùng*" ChangeText={(val) => setName(val)} />
      <ItemInput title="Email*" ChangeText={(val) => setEmail(val)} />
      <ItemInput title="Số điện thoại*" ChangeText={(val) => setPhone(val)} />
      <ItemInput title="Tên tài khoản*" ChangeText={(val) => setUsername(val)} />
      <PassWordInput
        title="Mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setPass(val)}
      />
      <PassWordInput
        title="Xác nhận mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setConfirm(val)}
      />
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} onPress={Login}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={SignUp}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với{' '}
        <Text style={styles.policyHighLight}>điều khoản quy định</Text> của chúng tôi
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
    fontSize: 28,
    marginLeft: '32%',
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
    fontSize: 16,
  },
  policyHighLight: { color: '#25969E', fontSize: 16 },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
});
export default LoginForm;

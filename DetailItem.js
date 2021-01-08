/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import enouvo from './image/enouvo.jpg';
import close from './image/close.png';
import fb from './image/facebook.png';
import inta from './image/instagram.png';
import web from './image/browser.png';
import next from './image/next.png';
import call from './image/call.png';
import pin from './image/pin.png';
import pic1 from './image/pic1.jpg';
import pic2 from './image/pic2.jpg';
import pic3 from './image/pic3.jpg';
import { Navigation } from 'react-native-navigation';
const DetailItem = (props) => {
  const onchange = () => {
    Navigation.pop(props.componentId);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageHeader} source={{ uri: props.detail?.imageUrl }} />
        <TouchableOpacity style={styles.imageClose} onPress={onchange}>
          <View>
            <Image source={close} />
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.title}>{props.detail.title}</Text>
          <Text style={styles.textHeader}>
            <Image source={pin} style={{ tintColor: 'white', marginRight: 10 }} />
            {props.detail.address.en}
          </Text>
          <Text style={styles.textHeader}>
            <Image source={call} style={{ tintColor: 'white', marginRight: 10 }} />
            (+84) 901 131 212
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.scrollText}>IMAGE</Text>
      </View>
      <ScrollView style={styles.scroll} horizontal>
        <Image style={styles.imageScroll} source={pic1} />
        <Image style={styles.imageScroll} source={pic2} />
        <Image style={styles.imageScroll} source={pic3} />
      </ScrollView>
      <View>
        <Text style={styles.descriptionText}>DESCRIPTION</Text>
        <Text style={styles.textContent}>{props.detail.subtitle.en}</Text>
        <Text style={styles.socialText}>SOCIAL</Text>
        <View style={styles.social}>
          <Text
            style={{ paddingRight: 6, fontSize: 16 }}
            onPress={() => Linking.openURL('https://enouvo.com/')}
          >
            <Image source={web} /> enouvo.com
          </Text>
          <Text
            style={{ paddingRight: 6, fontSize: 16 }}
            onPress={() => Linking.openURL('https://www.facebook.com/enouvo')}
          >
            <Image source={fb} style={{ marginRight: 10 }} /> facebook.com/enouvo/
          </Text>
          <Text
            style={{ paddingRight: 6, fontSize: 16 }}
            onPress={() => Linking.openURL('https://www.instagram.com/enouvo.it.solutions/')}
          >
            <Image source={inta} /> instagram.com/enouvo.it.solutions/
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btVisit}
        onPress={() => Linking.openURL('https://google.com')}
      >
        <Text style={styles.textBT}>Visit our website</Text>
        <Image source={next} style={{ marginTop: 17, marginLeft: 8 }} />
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  btVisit: {
    height: 50,
    width: '100%',
    backgroundColor: '#F08080',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBT: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  imageHeader: {
    width: '100%',
    height: 230,
  },
  imageClose: {
    textAlign: 'left',
    marginLeft: 30,
    marginTop: -200,
  },
  info: {
    marginTop: 100,
    marginLeft: 30,
  },
  textHeader: {
    color: '#F8F8FF',
    fontSize: 15,
  },
  textContent: {
    marginLeft: 30,
    fontSize: 16,
    marginRight: 20,
  },
  scroll: {
    marginLeft: 15,
    padding: 20,
    marginRight: 10,
  },
  scrollText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  imageScroll: {
    height: 120,
    width: 150,
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    // marginTop: -305,
    marginBottom: 10,
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 10,
  },
  social: {
    marginLeft: 30,
  },
  title: {
    color: '#F8F8FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default DetailItem;

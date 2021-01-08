import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { swipeData } from './data';
import DetailItem from './DetailItem';
const FirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}> Upcoming Event</Text>
      </View>
      <ScrollView>
        {swipeData.map((data, index) => (
          <View key={index.toString()}>
            <View style={styles.item}>
              <TouchableWithoutFeedback
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'DetailItem',
                      passProps: {
                        detail: data,
                      },
                      options: {
                        topBar: {
                          visible: false,
                          height: 0,
                        },
                      },
                    },
                  })
                }
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: data.imageUrl,
                  }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.content}>
              <Text style={styles.date}> {data.date.en}</Text>
              <Text style={styles.title}> {data.title}</Text>
              <Text style={styles.address}> {data.address.en}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '90%',
    borderRadius: 15,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  content: {
    marginTop: 5,
    textAlign: 'left',
    marginLeft: 23,
  },
  date: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 25,
  },
});

export default FirstScreen;
Navigation.registerComponent('DetailItem', () => DetailItem);

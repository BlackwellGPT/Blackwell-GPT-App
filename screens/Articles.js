import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function Articles() {
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle}>
        Articles of the week
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    // Add your desired styles for the text here
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    padding: 30,
    paddingTop: 10,
    paddingLeft: 20,
    marginLeft: 10,
    marginRight:10,
    marginTop: 30,

  },
  viewStyle: {
    
  }

});

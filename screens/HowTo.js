import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function HowTo() {
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle}>
        To use Blackwell GPT, click on the text box on the home page and type in your medical-related questions. In the top right of the screen, you can access past conversations, and use the plus button to create a new conversation.
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    // Add your desired styles for the text here
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
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

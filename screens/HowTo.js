import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
export default function HowTo() {
  return (
    <View style={styles.container}> 
      <Text style={styles.Title}>  
      How to use Blackwell GPT
      </Text>
      <View style={styles.box_1}>
        <Text style={styles.Text}>
          To use Blackwell GPT, tap the text input box at the bottom of the main screen. Then, type in your question or input an image and send the message to recieve your answer.
        </Text>
      </View>
      <View style={styles.box_2}>
        <Text style={styles.Text}>
          There are three buttons at the top right on the home page. The first button presents relavent articles on medicine and health, the second button displayes previous conversations you have had, and the third button brings you back to the usage guide.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'normal',
    color: 'grey',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 30,
    backgroundColor: '#ddd',
  },
 box_1: {
    padding: 10,
    backgroundColor: 'skyblue',
    borderTopLeftRadius: 17,
    borderBottomRightRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  box_2: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderTopLeftRadius: 17,
    borderBottomRightRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  image: {
    width: 50,
    height:50,
  },
});


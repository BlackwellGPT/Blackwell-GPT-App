import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HowTo = () => {
  return (
    <View>
      <Text style={styles.textStyle}>HOW-TO</Text>
      <Text style= {styles.header}>This is a guide on how to use the app to its full capability.</Text>
      <View style ={styles.viewStyle}>
        <Text style={styles.text}>When you first enter Blackwell GPT, you may feel a little overwhelmed, but fear not!</Text>
        <Text style={styles.text}>Blackwell is both powerful and capable, yet minimalistic and easy to use. Similar to other AI, you communicate through a chat feature, which accepts both text and voice inputs (powered by Whisper AI).</Text>
        <View>
          <Text style={styles.text}>To chat with Blackwell, use the input bar at the bottom of the homepage, which accepts many forms of input.</Text>
          <Text style ={styles.textStyle}>INPUT DIAGRAM</Text>
          <Image 
            style = {styles.imageStyle}
            source={require("../assets/bottombar.jpg")}
          />
          
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 5,
    paddingBottom: 0,
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "black",
    letterSpacing: 0,
    fontWeight: 'bold'

  },
  header: {
    color: "black",
    paddingTop: 5,
    padding: 5,
    textAlign: "center",
    backgroundColor: "coral",
    marginBottom: 0,
    marginTop: 20,
    margin: 10,
    letterSpacing: 0,
    overflow: "hidden",
    borderRadius: 5,
    fontSize: 10,
    borderColor: "black",
    paddingBottom: 5
  },
  text: {
    letterSpacing: 0,
    padding: 10,
    paddingBottom: 20,
    color: "black",

  },
  viewStyle: {
    borderWidth: 1,
    margin: 10,
    marginTop: 20,
    marginBottom: 40,
    borderColor: "grey",
    borderStyle: 'dashed',
    borderRadius: 5,
    overflow: 'hidden'
  },
  imageViewStyle: {
    borderWidth: 1,
    margin: 10,
    borderColor: "black",
    borderRadius: 10,
    overflow: 'hidden',
    alignContent: 'center',
    borderStyle: 'dashed'
  },
  imageStyle: {
    width: 300,
    height: 100,
    resizeMode: 'cover',
    aspectRatio: 1.5,
    marginBottom: 20,
    alignContent: 'center',
    borderRadius: 19,
    alignSelf: 'center',
    marginTop: 10
  },

});
export default HowTo;
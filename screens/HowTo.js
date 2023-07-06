import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HowTo = () => {
  return (
    <View>
      <Text style={styles.title}>HOW-TO</Text>
      <View style ={styles.viewStyle}>
        <Text style={styles.text}>To communicate with Blackwell GPT, use the input bar on the bottom of the home screen.</Text>
        <Text style={styles.text}>You can use voice, image, and text-based input to chat with Blackwell.</Text>
        <View style={styles.viewStyleTwo}>
          <Text style ={styles.secondtitle}>INPUT DIAGRAM</Text>
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
  title: {
    padding: 5,
    paddingBottom: 0,
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "black",
    letterSpacing: 0,
    fontWeight: 'bold'

  },
  secondtitle: {
    padding: 5,
    paddingBottom: 0,
    paddingTop: 20,
    fontSize: 20,
    textAlign: "left",
    color: "coral",
    letterSpacing: 0,
    fontWeight: 'bold'

  },
  text: {
    letterSpacing: 0,
    padding: 10,
    paddingBottom: 20,
    color: "black",
    fontSize: 15

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
  imageStyle: {
    width: 300,
    height: 100,
    resizeMode: 'cover',
    aspectRatio: 1.5,
    marginBottom: 20,
    borderRadius: 19,
    alignSelf: 'left',
    marginTop: 10,
    margin: 10
  },
  viewStyleTwo: {
    borderWidth: 1,
    margin: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "grey",
    borderStyle: 'dashed',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'left',
    padding: 10
  },
});
export default HowTo;
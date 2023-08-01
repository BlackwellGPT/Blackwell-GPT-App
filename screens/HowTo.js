import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet, FlatList } from 'react-native';
import { Svg, Path } from 'react-native-svg';
export default function HowTo() {
  const data = [
    {}
  ];
  
  return (
    <FlatList 
          data = {data} 
          renderItem={() => {
            return (
              <View>
                <Text style = {{fontSize: 30, alignSelf: 'center', padding: 30, paddingBottom: 5, fontWeight: 'bold', color: "grey"}}>HOW TO</Text>

                <View style = {styles.viewStyle}> 
        
                  <Text style = {styles.bodyText}>To use Blackwell GPT, use the message field (accepts voice and text input) located in the bottom bar of the homepage. You can also click on the image button to its left, which accepts images of _____ and can identify ______.</Text>
                  <Text style = {styles.bodyText}>The articles tab in the top right shows interesting health articles, and the past conversations button allows you to access your conversation history.</Text>
                </View>
                <Text style = {{fontSize: 30, alignSelf: 'center', padding: 35, paddingBottom: 5, paddingTop: 20, color: "grey", fontWeight: 'bold'}}>FAQS</Text>
                <Text style = {styles.question}>Q: What is Blackwell GPT trained on? {'\n'}{'\n'} A: Blackwell GPT is a GPT-3.5-Turbo model from Open AI that has been trained on thousands of real conversations between doctors and patients.</Text>                
              </View>

            )
          }}
      />

  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 15,
    padding: 0,
    margin: 10,
  },
  viewStyle: {
    alignContent: 'center',
    padding: 20,
    paddingTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    borderStyle: 'dashed',
    borderColor: 'grey'
  }, 
  question:{
    padding: 10,
    fontSize: 15,
    color: 'black',
    backgroundColor: 'ivory',
    margin: 30,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: 'ivory',
    marginTop: 10
  },
});


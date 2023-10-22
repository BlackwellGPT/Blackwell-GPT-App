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
    <View style = {{backgroundColor:'white'}}>
      <FlatList 
      style={{flex: 1}}
            data = {data} 
            renderItem={() => {
              return (
                <View style={{backgroundColor: "#f1f5f9", flex: 1}}>

                  <View style = {styles.viewStyle}> 
          
                    <Text style = {styles.bodyText}>To use Blackwell GPT, use the message field (accepts voice and text input) located in the bottom bar of the homepage. You can also click on the image button to its left, which accepts images of lung x-rays and can identify if your lungs are healthy.</Text>
                    <Text style = {styles.bodyText}>Use the drawer menu to access past convos, interesting health articles, the usage guide, and settings.</Text>
                  </View>
                  <Text style = {{fontSize: 30, alignSelf: 'center', padding: 35, paddingBottom: 20, paddingTop: 20, color: "black", fontWeight: '500', paddingLeft: 20}}>FAQS</Text>

                  <Text style = {styles.question}>Q: What is Blackwell GPT trained on? </Text>   
                  <Text></Text>
                  <Text style = {styles.answer}> A: Blackwell GPT is trained on over 100,000 real conversations between doctors and patients. It uses a base Llama 2 model from Meta.</Text>      
                  <Text></Text>
                  <Text style = {styles.question}>Q: How did we get our name? </Text>   
                  <Text></Text>
                  <Text style = {styles.answer}> A: Our name is inspired by Elizabeth Blackwell, the first female doctor.</Text>      
                  <Text></Text>

                </View>

              )
            }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 15,
    padding: 0,
    margin: 10,
    marginBottom: 0
  },
  viewStyle: {
    alignContent: 'center',
    padding: 20,
    paddingTop: 10,
    margin: 20,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    borderColor: '#bae6fd',
    borderWidth: 2,
    borderStyle: 'dashed'

  }, 
  question:{
    fontSize: 15,
    color: 'black',
    backgroundColor: '#d4d4d8',
    overflow: "hidden",
    fontWeight: "500",
    padding: 6,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 5,
    alignSelf: 'baseline'
  },
  answer:{
    fontSize: 15,
    color: 'black',
    backgroundColor: '#d4d4d8',
    overflow: "hidden",
    fontWeight: "500",
    padding: 5,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 6,
    alignSelf: 'auto',
    marginBottom: 50
  },
});


import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default function Articles() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://cf-workers-news.johnomeara40.workers.dev/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen' }} 
        />
    </SafeAreaView>
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

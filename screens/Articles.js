import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

export default function Articles () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style = {{backgroundColor: "lightblue", margin: 10, fontWeight: "bold", borderRadius: 10, borderColor: "lightblue", overflow: 'hidden', padding: 15 }}>A collection of the most influential news on AI and health that our team wants to share with you</Text>
      <WebView
        source={{
          uri: 'https://cf-workers-news.johnomeara40.workers.dev/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen'
        }}
      />
      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

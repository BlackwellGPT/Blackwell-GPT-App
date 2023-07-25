import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

export default function Articles () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://cf-workers-news.johnomeara40.workers.dev/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen'
        }}
      />
      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

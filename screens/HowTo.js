import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HowTo() {
  return (
    <View>
      <Text className="text-lg text-[#333] text-left my-3 p-7 mx-2 mt-7">
        To use Blackwell GPT, click on the text box on the home page and type in your medical-related questions. In the top right of the screen, you can access past conversations, and use the plus button to create a new conversation.
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

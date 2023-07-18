import React from 'react'
import { Text, View, Image } from 'react-native'

export default function ChatBubble ({ contents, bolden = false }) {
  return (
    <View
      className={
        'bg-white border border-gray-300 p-4 my-2 mx-3 rounded-sm ' +
        (bolden ? 'bg-blue-100 border-blue-300' : '')
      }
    >
      {contents === '' && <Image className="mx-auto" source={require("../assets/progress.gif")} />}
      {contents !== '' && <Text>{contents}</Text>}
    </View>
  )
}

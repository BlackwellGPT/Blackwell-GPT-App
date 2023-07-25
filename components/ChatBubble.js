import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default function ChatBubble ({ contents, bolden = false }) {
  return (
    <View>
      <View
        className={
          'bg-white border border-gray-300 p-2 my-2 mx-3 rounded-md ' +
          (bolden ? 'bg-blue-100 border-blue-300 self-end' : 'self-start')
        }
      >
        {contents === '' && (
          <Image
            className='mx-auto h-8 w-12'
            source={require('../assets/progress.gif')}
          />
        )}
        {contents !== '' && (
          <Text>{contents}</Text>

        )}
        {contents !== '' && !bolden && !bolden && (<TouchableOpacity><Text style = {{fontSize: 10, paddingTop: 10}}>Related videos</Text></TouchableOpacity>)}
      </View>
    </View>
  )
}

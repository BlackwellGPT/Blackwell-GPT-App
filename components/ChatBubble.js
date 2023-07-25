import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Svg, Path } from 'react-native-svg'

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
        {contents !== '' && <Text>{contents}</Text>}
        {contents !== '' && !bolden && !bolden && (
          <TouchableOpacity className='flex flex-row gap-1 items-center pt-2'>
            <Text className='text-blue-400 font-bold'>Related videos</Text>
            <Svg
              xmlns='http://www.w3.org/2000/svg'
              strokeWidth={4}
              className='fill-blue-400 stroke-blue-400 w-4 h-4'
              viewBox='0 0 256 256'
            >
              <Path d='M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z'></Path>
            </Svg>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

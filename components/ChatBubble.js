import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
  FlatList
} from 'react-native'
import { Svg, Path } from 'react-native-svg'
export default function ChatBubble ({ contents, bolden = false, prevMsg }) {
  let MY_URL = 'https://www.youtube.com/results?search_query=' + prevMsg
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
        {contents !== '' && <Text>{contents.split('&*&*&*\n').pop()}</Text>}
        {contents.split('&*&*&*\n').length > 1 && (
          <FlatList
            data={contents.split('&*&*&*\n').slice(0, -1)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                Alert.alert('Generated Radiology Report', item.replace("My Doctor's Radiology Report: ", "").replace("\nPlease help me interpret it.", ""))
              }}>
                <View className='p-2 rounded-lg bg-blue-50 mt-3'>
                  <View className='opacity-50 flex flex-row items-center'>
                    <Svg
                      xmlns='http://www.w3.org/2000/svg'
                      strokeWidth={4}
                      fill="#000"
                      className='w-5 h-5'
                      viewBox='0 0 256 256'
                    >
                      <Path d='M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z'></Path>
                    </Svg>
                    <Text className='font-bold pl-2'>
                      Generated Radiology Report
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
        )}
        {contents !== '' && !bolden && (
          <TouchableOpacity
            onPress={() => Linking.openURL(MY_URL)}
            className='flex flex-row gap-1 items-center pt-2'
          >
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

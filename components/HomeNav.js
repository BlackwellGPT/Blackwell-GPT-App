import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import * as NavigationBar from 'expo-navigation-bar'
import Login from '../screens/Login'

NavigationBar.setBackgroundColorAsync('#fff')
NavigationBar.setButtonStyleAsync('dark')

export default function HomeNav ({ navigation }) {
  return (
    <View
      style={styles.shadow}
      className='sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-center border-b border-gray-300 px-2'
    >
      <View className='flex w-full px-2 flex-row gap-[6px]'>
        <Text className='text-2xl font-bold'>Blackwell</Text>
        <Text className='text-2xl font-bold text-blue-500'>GPT</Text>
        <View className='flex-1'></View>
        <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
          <Svg
            width={32}
            height={32}
            viewBox='0 0 256 256'
            strokeWidth={2}
            className='fill-blue-500 stroke-blue-500'
          >
            <Path d='M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z'></Path>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Past Conversations')}
        >
          <Svg
            width={32}
            height={32}
            viewBox='0 0 256 256'
            strokeWidth={2}
            className='fill-blue-500 stroke-blue-500'
          >
            <Path d='M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z'></Path>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Usage Guide')}>
          <Svg
            width={32}
            height={32}
            viewBox='0 0 256 256'
            strokeWidth={2}
            className='fill-blue-500 stroke-blue-500'
          >
            <Path d='M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'></Path>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Svg  
            width={32}
            height={32}
            viewBox='0 0 256 256'
            strokeWidth={2}
            className='fill-gray-500 stroke-blue-500'
            >
              <Path d='M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z'></Path>
            </Svg>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: 'white'
  }
})

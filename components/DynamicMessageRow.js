import React from 'react'
import { View, TouchableOpacity, TextInput, Keyboard, Text, ScrollView } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { useEffect, useState } from 'react'


export default function DynamicMessageRow ({ sendMessage, scrollToEnd, newChat, navigation }) {
  const [collapsed, setCollapsed] = React.useState(false)
  const [currentlyRecieving, setCurrentlyRecieving] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [textInputValue, setTextInputValue] = React.useState('')

  const onTextInputChange = value => {
    setTextInputValue(value)
    if (value === '') {
      setDisabled(true)
      show()
    } else {
      setDisabled(false)
      collapse()
    }
  }

  const show = () => {
    setCollapsed(false)
  }

  const collapse = () => {
    setCollapsed(true)
  }

  const sendCurrentMessage = async () => {
    if (!disabled) {
      setCurrentlyRecieving(true)
      const valueTemp = textInputValue
      setTextInputValue('')
      setDisabled(true)
      await sendMessage(valueTemp)
      setCurrentlyRecieving(false)
    }
  }

  const [isKeyboardOpen, setKeyboardOpen] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true)
        setTimeout(() => {
          scrollToEnd()
        }, 50)
      }
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false)
      }
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  })


  return (
    <View>
      <View
        className={'mx-auto w-full bg-white ' + (isKeyboardOpen ? "pb-0" : "pb-4")}
      >
        <View className='space-y-4 border-t border-gray-300 p-2'>
          <View className='bg-background relative flex max-h-60 w-full grow flex-row overflow-hidden items-center gap-2'>
            
            {collapsed && (
              <TouchableOpacity onPress={show}>
                <View className='bg-gray-200 p-2 rounded-full opacity-40'>
                  <Svg fill='#000000' viewBox='0 0 256 256' className='w-6 h-6'>
                    <Path d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z'></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            )}
            {!collapsed && (
              <TouchableOpacity onPress={newChat}>
                <View className='bg-gray-200 p-2 rounded-full opacity-40'>
                  <Svg fill='#000000' viewBox='0 0 256 256' className='w-6 h-6'>
                    <Path d='M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z'></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            )}
            
            {!collapsed && (
              <TouchableOpacity>
                <View className='bg-gray-200 p-2 rounded-full opacity-40'>
                  <Svg fill='#000000' viewBox='0 0 256 256' className='w-6 h-6'>
                    <Path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z'></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            )}
            
            <View className=' bg-gray-200 rounded-xl p-2 opacity-60 flex-1 overflow-hidden'>
              <TextInput
                placeholder='Send a message.'
                multiline
                onChangeText={onTextInputChange}
                value={textInputValue}
              ></TextInput>
            </View>
            
            <TouchableOpacity
              onPress={sendCurrentMessage}
              disabled={disabled || currentlyRecieving}
            >
              <View
                className={
                  'bg-blue-400 p-2 rounded-full ' +
                  (!disabled && !currentlyRecieving ? '' : 'opacity-50')
                }
              >
                <View className='w-6 h-6 flex justify-center'>
                  <Svg
                    fill='#fff'
                    viewBox='0 0 256 256'
                    className='w-6 h-5'
                    preserveAspectRatio='none'
                  >
                    <Path d='M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z'></Path>
                  </Svg>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  )
}

import React from 'react'
const { forwardRef, useImperativeHandle } = React
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import ChatBubble from './ChatBubble'

const websocketUrl = 'ws://192.168.4.23:9000'

const ChatContents = forwardRef((props, ref) => {
  const [messages, setMessages] = React.useState([])

  const flatListRef = React.useRef(null)

  let client
  let promise, promiseResolve

  const setup = () => {
    client = new W3CWebSocket(websocketUrl)

    client.onmessage = message => {
      if (message.data === '[END]') {
        promiseResolve()
        return
      }
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages]
        const lastMessageIndex = updatedMessages.length - 1
        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          content: updatedMessages[lastMessageIndex].content + message.data
        }
        if (flatListRef.current !== null) {
          flatListRef.current.scrollToEnd({ animated: false })
        }

        return updatedMessages
      })
    }
  }

  React.useEffect(() => {
    setup()

    return () => {
      client.close()
    }
  }, [])

  useImperativeHandle(ref, () => ({
    async sendMessage (message) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length, content: message },
        { id: prevMessages.length + 1, content: '' }
      ])
      client.send(message)
      promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve
      })
      if (flatListRef.current !== null) {
        setTimeout(() => {
          if (flatListRef.current !== null) {
            flatListRef.current.scrollToEnd({ animated: false })
          }
        }, 50)
      }
      await promise
    },
    scrollToEnd () {
      if (flatListRef.current !== null) {
        flatListRef.current.scrollToEnd({ animated: false })
      }
    },
    newChat () {
      setMessages([])
      if(promiseResolve) {
        promiseResolve()
      }
      if (typeof client !== "undefined") {
        client.close()
      }
      setup()
    }
  }))

  return (
    <View className='flex-1 overflow-auto'>
      {messages.length === 0 && (
        <ScrollView overScrollMode='never'>
          <View className='mx-auto max-w-2xl px-4 my-8'>
            <View className='border-2 p-6 border-gray-300 border-dashed'>
              <Text className='mb-2 text-lg font-semibold'>Welcome!</Text>
              <Text className='mb-2'>
                Blackwell GPT is a chat-based model that is aimed at making
                basic medical assistance more accessible.
              </Text>
              <Text className='text-sm font-bold opacity-60 mt-2'>
                Examples
              </Text>
              <View className='mt-4 flex flex-col items-start space-y-2'>
                <TouchableOpacity className='flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white'>
                  <Text className='font-extrabold my-1'>
                    Interpret a chest radiograph
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white'>
                  <Text className='font-extrabold my-1'>
                    Help treat a migraine
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white'>
                  <Text className='font-extrabold my-1'>
                    How do I perform CPR?
                  </Text>
                </TouchableOpacity>
              </View>
              <Text className='mt-4 underline'>
                This is not medical advice or a supplement for an actual doctor.
                Use it at your own risk.
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
      {messages.length !== 0 && (
        <FlatList
          ref={flatListRef}
          overScrollMode='never'
          className='pt-2'
          ListFooterComponent={<View></View>}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ChatBubble
              bolden={item.id % 2 === 0 ? true : false}
              contents={item.content}
              
            ></ChatBubble>
          )}
          
        />
      )}
    </View>
  )
})

export default ChatContents

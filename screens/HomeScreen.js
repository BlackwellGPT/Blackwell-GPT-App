import { View, StatusBar, KeyboardAvoidingView, Platform, Text } from 'react-native'
import React from 'react'
import ChatContents from '../components/ChatContents'
import DynamicMessageRow from '../components/DynamicMessageRow'
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler"
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
const LeftActions = () => {
  <View>
    <Text>Hi</Text>
  </View>
}
const CustomStatusBar = ({ backgroundColor, barStyle = 'dark-content' }) => {
  const insets = useSafeAreaInsets()

  return (

    <View style={{ height: insets.top - 10, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  )
}

function HomeScreen ({ navigation }) {

  const chatRef = React.useRef()

  const [sendMessage, setSendMessage] = React.useState()
  const [scrollToEnd, setScrollToEnd] = React.useState()
  const [newChat, setNewChat] = React.useState()

  React.useEffect(() => {
    setSendMessage(() => chatRef.current.sendMessage)
    setScrollToEnd(() => chatRef.current.scrollToEnd)
    setNewChat(() => chatRef.current.newChat)
  }, [])

  return (
    
        <KeyboardAvoidingView
          className='flex-1'
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <SafeAreaProvider>
            <CustomStatusBar backgroundColor='#fff' />
            <View className='flex-1 flex max-h-screen flex-col overflow-hidden'>
          

              <View className='flex flex-col flex-1'>
                <ChatContents ref={chatRef}/>
                <DynamicMessageRow
                  sendMessage={sendMessage}
                  scrollToEnd={scrollToEnd}
                  newChat={newChat}
                  navigation={navigation}
                />
              </View>
            </View>
          </SafeAreaProvider>
        </KeyboardAvoidingView>


  )
}

export default HomeScreen

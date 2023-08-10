import { StatusBar } from 'expo-status-bar'
import LoginScreen from 'react-native-login-screen'
import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Login ({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [showErrorMessage, setShowErrorMassage] = React.useState(false)

  React.useEffect(() => {
    setShowErrorMassage(false)
  }, [username, password])

  return (
    <ScrollView
      className='flex-1 bg-white flex py-16'
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      keyboardShouldPersistTaps='handled'
    >
      <LoginScreen
        customLogo={
          <View>
            <View className='flex w-full px-2 flex-row gap-[6px] justify-center'>
              <Text className='text-4xl font-bold'>Blackwell</Text>
              <Text className='text-4xl font-bold text-blue-500 mb-4'>GPT</Text>
            </View>
            {showErrorMessage && (
              <Text className='text-red-500 font-bold text-xl text-center'>
                Login Unsuccessful
              </Text>
            )}
          </View>
        }
        onLoginPress={async () => {
          const resp = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBf86mDYnqRsM0quasbeDVR5FEmHDoUEJA',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: username,
                password: password,
                returnSecureToken: false
              })
            }
          )
          const json = await resp.json()
          const accessGranted = typeof json['idToken'] !== 'undefined'
          if (accessGranted) {
            navigation.navigate('StackScreen')
          } else {
            setShowErrorMassage(true)
          }
        }}
        onSignupPress={() => navigation.navigate('Signup')}
        disableEmailTooltip
        disablePasswordTooltip
        onEmailChange={setUsername}
        onPasswordChange={setPassword}
        enablePasswordValidation
        className='bg-white flex justify-center'
        emailTextInputProps={{
          autoCorrect: false,
          spellCheck: false,
          keyboardType: 'visible-password'
        }}
        passwordTextInputProps={{
          autoCorrect: false,
          spellCheck: false
        }}
      />
      <StatusBar style='dark' />
    </ScrollView>
  )
}

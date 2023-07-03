import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Platform, NativeModules } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

NavigationBar.setBackgroundColorAsync("#fff");
NavigationBar.setButtonStyleAsync("dark")

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container} className="flex-1 flex max-h-screen flex-col">
      <View style={styles.shadow} className="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-center border-b border-gray-300 px-2">
        <View className="flex w-full px-2 flex-row">
          <TouchableOpacity onPress={() => navigation.navigate('Usage Guide')}>
            <Svg width={32} height={32} fill="#000" viewBox='0 0 256 256' className="opacity-80">
              <Path d='M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'></Path>
            </Svg>
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-bold">Blackwell GPT</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Past Conversations')}>
            <Svg width={32} height={32} fill="#000" viewBox='0 0 256 256' className="opacity-80">
              <Path d='M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z'></Path>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-col flex-1">
        <View className="flex-1">
          <View className="pt-8">
            <View className="mx-auto max-w-2xl px-4">
              <View className="border-2 p-6 border-gray-300 border-dashed">
                <Text className="mb-2 text-lg font-semibold">Welcome!</Text>
                <Text className="mb-2">Blackwell GPT is a chat-based model that is aimed at making basic medical assistance more accessible.</Text>
                <Text>You can start a conversation here or try the following examples:</Text>
                <View className="mt-4 flex flex-col items-start space-y-2">
                  <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                    <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                      <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                    </Svg>
                    <Text className="font-medium my-1">Interpret a lung scan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                    <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                      <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                    </Svg>
                    <Text className="font-medium my-1">Help treat a migrane</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                    <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                      <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                    </Svg>
                    <Text className="font-medium my-1">How do I perform CPR?</Text>
                  </TouchableOpacity>
                </View>
                <Text className="mt-4 underline">This is not medical advice or a supplement for an actual doctor. Use it at your own risk.</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View className="mx-auto w-full bg-white">
            <View className="space-y-4 border-t border-gray-300 p-2">
              <View className="bg-background relative flex max-h-60 w-full grow flex-row overflow-hidden gap-2">
                <TouchableOpacity>
                  <View className=" bg-gray-200 p-2 rounded-full opacity-70">
                    <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                      <Path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></Path>
                    </Svg>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className=" bg-gray-200 p-2 rounded-full opacity-70">
                    <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                      <Path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></Path>
                    </Svg>
                  </View>
                </TouchableOpacity>
                <View className=" bg-gray-200 rounded-full p-2 opacity-70 flex-1">
                  <TextInput placeholder='Send a message.'></TextInput>
                </View>
                <TouchableOpacity>
                  <View className=" bg-gray-200 p-2 rounded-full opacity-70">
                    <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                      <Path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></Path>
                    </Svg>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" backgroundColor='#fff' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    overflow: "hidden"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: "white",
  }
})

export default HomeScreen;
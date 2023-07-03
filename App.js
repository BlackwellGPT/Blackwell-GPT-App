import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <View style={styles.container} className="flex-1 flex max-h-screen flex-col">
      <View style={styles.shadow} className="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-center border-b border-gray-300 px-2">
        <View className="flex w-full px-2 flex-row">
          <TouchableOpacity>
            <Svg width={32} height={32} fill="#000" viewBox='0 0 256 256' className="opacity-80">
              <Path d='M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'></Path>
            </Svg>
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-bold">Blackwell GPT</Text>
          <TouchableOpacity>
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
            <View className="space-y-4 border-t border-gray-300 px-4 py-1">
              <View className="bg-background relative flex max-h-60 w-full grow flex-col overflow-hidden px-8">
                <TouchableOpacity className="border-input absolute left-0 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 p-0 text-sm font-medium">
                  <Svg viewBox="0 0 256 256" fill="#000" className="h-4 w-4">
                    <Path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" stroke="black" strokeWidth={10}></Path>
                  </Svg>
                </TouchableOpacity>
                <TextInput placeholder="Send a message." className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.2rem] focus-within:outline-none sm:text-sm" style="height: 66px !important;"></TextInput>
                <View className="absolute right-0 top-2">
                  <TouchableOpacity className="flex flex-row h-12 w-12 items-center justify-center rounded-2xl bg-blue-400 p-0 text-sm font-medium">
                    <Svg viewBox="0 0 256 256" fill="#fff" className="h-7 w-7">
                      <Path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></Path>
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
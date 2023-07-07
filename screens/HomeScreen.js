import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import HomeNav from '../components/HomeNav';
import ChatContents from '../components/ChatContents';
import DynamicMessageRow from './DynamicMessageRow';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container} className="flex-1 flex max-h-screen flex-col">
      <HomeNav navigation={navigation}/>
      <View className="flex flex-col flex-1">
        <ChatContents/>
        <DynamicMessageRow/>
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
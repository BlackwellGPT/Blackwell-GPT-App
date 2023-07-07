import { View, StyleSheet, StatusBar } from 'react-native';
import HomeNav from '../components/HomeNav';
import ChatContents from '../components/ChatContents';
import DynamicMessageRow from '../components/DynamicMessageRow';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar = (
  {
    backgroundColor,
    barStyle = "dark-content",
  }
) => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <View className="flex-1 flex max-h-screen flex-col overflow-hidden">
        <HomeNav navigation={navigation} />
        <View className="flex flex-col flex-1">
          <ChatContents />
          <DynamicMessageRow />
        </View>
      </View>
      <CustomStatusBar backgroundColor="#fff" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
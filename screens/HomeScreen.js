import { View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
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
    <View style={{ height: insets.top - 10, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor="#fff" />
        <View className="flex-1 flex max-h-screen flex-col overflow-hidden">
          <HomeNav navigation={navigation} />

          <View className="flex flex-col flex-1">
            <ChatContents />
            <DynamicMessageRow />
          </View>

        </View>
      </SafeAreaProvider >
    </KeyboardAvoidingView>

  );
}

export default HomeScreen;
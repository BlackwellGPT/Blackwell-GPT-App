import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HowTo from './screens/HowTo';
import Conversations from './screens/Conversations';
import Articles from './screens/Articles';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Settings from './screens/Settings'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Usage Guide" component={HowTo} />
        <Stack.Screen name="Past Conversations" component={Conversations} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name='Settings' component = {Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
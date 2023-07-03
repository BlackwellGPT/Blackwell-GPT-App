import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HowTo from './screens/HowTo';
import Conversations from './screens/Conversations';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Usage Guide" component={HowTo} />
        <Stack.Screen name="Past Conversations" component={Conversations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
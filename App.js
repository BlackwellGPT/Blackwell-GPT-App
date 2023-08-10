import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import HowTo from './screens/HowTo';
import Conversations from './screens/Conversations';
import Articles from './screens/Articles';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Settings from './screens/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './components/CustomDrawer';
import {Svg, Path} from 'react-native-svg'
function StackScreen() {
  return (
    <Drawer.Navigator drawerContent = {props => <CustomDrawer {...props}/>}screenOptions={{headerShown:true, drawerLabelStyle:{marginLeft: -20}, drawerActiveBackgroundColor: "#ADD8E6", drawerActiveTintColor: "#5494DA"}}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon: () => {
          return (
            <Svg fill="grey" viewBox='0 0 256 256' className='w-6 h-6' width='20' height ="20">
              <Path d='M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z'></Path>
            </Svg>
          )
          

        }
      }}/>
      <Drawer.Screen name="Usage Guide" component={HowTo} options= {{
        drawerIcon: () => {
          return (
            <Svg fill='grey' viewBox='0 0 256 256' className='w-6 h-6' width='20' height ="20">
              <Path d='M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z'></Path>
            </Svg>
          )
          

        } 
      }}/>
      <Drawer.Screen name="Past Conversations" component={Conversations} options= {{
        drawerIcon: () => {
          return (
            <Svg fill='grey' viewBox='0 0 256 256' className='w-6 h-6' width='20' height ="20">
              <Path d='M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.17-54.83-34.26a6,6,0,0,0-6.36,0L70,213.17V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z'></Path>
            </Svg>
          )
          

        } 
      }}/>
      <Drawer.Screen name="Articles" component={Articles} options= {{
        drawerIcon: () => {
          return (
            <Svg fill='grey' viewBox='0 0 256 256' className='w-6 h-6' width='20' height ="20"> 
              <Path d='M224,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM96,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130-2a2,2,0,0,1-2,2H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h64a2,2,0,0,1,2,2ZM206,96a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,96Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,128Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,160Z'></Path>
            </Svg>
          )
          

        } 
      }}/>
      <Drawer.Screen name='Settings' component = {Settings} options= {{
        drawerIcon: () => {
          return (
            <Svg fill ="grey" color="#000" weight="duotone" viewBox='0 0 256 256' className='w-6 h-6' width='20' height ="20">
              <Path d='M134,120v96a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm66,74a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V200A6,6,0,0,0,200,194Zm24-32H206V40a6,6,0,0,0-12,0V162H176a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12ZM56,162a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V168A6,6,0,0,0,56,162Zm24-32H62V40a6,6,0,0,0-12,0v90H32a6,6,0,0,0,0,12H80a6,6,0,0,0,0-12Zm72-48H134V40a6,6,0,0,0-12,0V82H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z'></Path>
            </Svg>
            
          )
          

        } 
      }}/>
  </Drawer.Navigator>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="StackScreen" component={StackScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
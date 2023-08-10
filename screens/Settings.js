import react from "react";
import {View, StyleSheet, Text, TouchableOpacity, Switch} from 'react-native';
import { Svg, Path } from 'react-native-svg';


export default function Settings({navigation}) {
    return (
        <View>
            <Text style = {styles.header}>Welcome John!</Text>
            <View style = {styles.viewStyle}>
                <Text style={{fontWeight: "bold", padding: 10, paddingBottom: 20}}>Email: johnomeara40@gmail.com</Text>
                <TouchableOpacity onPress ={() => {navigation.navigate("Login")}} className='flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-black'>
                    <Text className='font-extrabold my-1 color-white'>
                        Create New Account
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity onPress ={() => {navigation.navigate("Login")}} className='flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white'>
                    <Text className='font-extrabold my-1'>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    ) 
    
    
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundWidth: 2,
        margin: 30,
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#5494DA',
        borderStyle: 'dashed',

    },
    textStyle: {
        padding: 3,
        fontSize: 15,
        fontWeight: 'bold'
    },
    header: {
        alignSelf: 'center',
        padding: 30,
        paddingBottom: 0,
        fontWeight: 'bold',
        fontSize: 20,
    }
})


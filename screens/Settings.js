import react from "react";
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Svg, Path } from 'react-native-svg';


export default function Settings({navigation}) {
    return (
        <View>
            <Text style = {styles.header}>Welcome John!</Text>
            <View style = {styles.viewStyle}>
                <Text style = {styles.textStyle}>Log Out</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Svg  
                    width={32}
                    height={32}
                    viewBox='0 0 256 256'
                    strokeWidth={2}
                    className='fill-blue-500 stroke-blue-500'
                    >
                    <Path d='M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z'></Path>
                    </Svg>
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
        alignSelf: 'auto',
        padding: 30,
        paddingBottom: 0,
        fontWeight: 'bold',
        fontSize: 20,
    }
})


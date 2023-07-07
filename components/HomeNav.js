import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

NavigationBar.setBackgroundColorAsync("#fff");
NavigationBar.setButtonStyleAsync("dark");

export default function HomeNav({ navigation }) {
    return (
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
    );
}

const styles = StyleSheet.create({
    shadow: {
        paddingTop: Platform.OS === 'ios' ? 44 : 0,
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
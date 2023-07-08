import { View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useEffect, useState } from 'react';

export default function DynamicMessageRow() {
    const [isKeyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardOpen(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardOpen(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View>
            <View className="mx-auto w-full bg-white" style={isKeyboardOpen ? "padding-bottom: 0px;" : "padding-bottom: 1rem;"}>
                <View className="space-y-4 border-t border-gray-300 p-2">
                    <View className="bg-background relative flex max-h-60 w-full grow flex-row overflow-hidden gap-2">
                        <TouchableOpacity>
                            <View className=" bg-gray-200 p-2 rounded-full opacity-40">
                                <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                                    <Path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></Path>
                                </Svg>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className=" bg-gray-200 p-2 rounded-full opacity-40">
                                <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                                    <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"></Path>
                                </Svg>
                            </View>
                        </TouchableOpacity>
                        <View className=" bg-gray-200 rounded-full p-2 opacity-60 flex-1">
                            <TextInput placeholder='Send a message.'></TextInput>
                        </View>
                        <TouchableOpacity>
                            <View className=" bg-gray-200 p-2 rounded-full opacity-40">
                                <Svg fill="#000000" viewBox="0 0 256 256" className="w-6 h-6">
                                    <Path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></Path>
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
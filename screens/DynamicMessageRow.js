import { View, TouchableOpacity, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function DynamicMessageRow() {
    return (
        <View>
            <View className="mx-auto w-full bg-white">
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
                                    <Path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></Path>
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
import { Text, View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function ChatContents() {
    return (
        <View className="flex-1">
            <View className="pt-8">
                <View className="mx-auto max-w-2xl px-4">
                    <View className="border-2 p-6 border-gray-300 border-dashed">
                        <Text className="mb-2 text-lg font-semibold">Welcome!</Text>
                        <Text className="mb-2">Blackwell GPT is a chat-based model that is aimed at making basic medical assistance more accessible.</Text>
                        <Text>You can start a conversation here or try the following examples:</Text>
                        <View className="mt-4 flex flex-col items-start space-y-2">
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                                <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                                    <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                                </Svg>
                                <Text className="font-medium my-1">Interpret a lung scan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                                <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                                    <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                                </Svg>
                                <Text className="font-medium my-1">Help treat a migrane</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-start rounded-md p-0 text-base font-medium shadow-none transition-colors">
                                <Svg viewBox="0 0 256 256" fill="#000" className="mr-2 h-4 w-4 inline opacity-60">
                                    <Path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></Path>
                                </Svg>
                                <Text className="font-medium my-1">How do I perform CPR?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="mt-4 underline">This is not medical advice or a supplement for an actual doctor. Use it at your own risk.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
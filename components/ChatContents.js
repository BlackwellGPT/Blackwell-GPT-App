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
                        <Text className="text-sm font-bold opacity-60 mt-2">Examples</Text>
                        <View className="mt-4 flex flex-col items-start space-y-2">
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white">
                                <Text className="font-extrabold my-1">Interpret a lung scan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white">
                                <Text className="font-extrabold my-1">Help treat a migraine</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex flex-row h-auto w-full items-center justify-center rounded-sm p-1 text-base font-medium shadow-none transition-colors border border-[#d1d5db] bg-white">
                                <Text className="font-extrabold my-1">How do I perform CPR?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="mt-4 underline">This is not medical advice or a supplement for an actual doctor. Use it at your own risk.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
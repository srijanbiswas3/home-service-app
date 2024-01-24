import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useFonts } from 'expo-font';


export default function Header() {
    const [fontsLoaded] = useFonts({
        'outfit': require('../../../assets/font/Outfit-Regular.ttf'),
        'outfit-medium': require('../../../assets/font/Outfit-Medium.ttf'),
        'outfit-bold': require('../../../assets/font/Outfit-Bold.ttf'),
      });
    
    const { user, isLoading } = useUser();
    return user && (
        <View className="h-40 w-full bg-purple-700 p-5 rounded-b-3xl">
            <View className=" flex-row justify-between items-center">

                <View className=" my-2 flex-row">
                    <Image className="w-10 h-10 rounded-full" source={{ uri: user?.imageUrl }} />
                    <View className="mx-2">
                        <Text className="text-white " >Welcome,</Text>
                        <Text className="text-white text-xl font-medium" >{user?.fullName}</Text>
                    </View>
                </View>

                <FontAwesome5 name="bookmark" size={30} color="white" />

            </View>

            <View className="flex-row justify-between">
                <TextInput placeholder="Search" className="w-10/12 h-12 text-purple-700 bg-white rounded-lg p-4 mt-2"></TextInput>
                <View className="bg-white rounded-lg h-12 mt-2 w-12 items-center justify-center">
                    <FontAwesome5 name="search" size={28} color={Colors.PRIMARY} />
                </View>
            </View>

        </View>
    )
}
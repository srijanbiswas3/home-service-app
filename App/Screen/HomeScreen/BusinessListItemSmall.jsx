import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItemSmall({ item }) {

    const naigate=useNavigation()
    return (
        <TouchableOpacity onPress={()=>naigate.push('business-detail',{business:item})} className="border-8 border-white rounded-2xl bg-white h-44 space-y-1 justify-center ite">
            <Image source={{ uri: item.images[0].url }} className="w-40 h-20 rounded-xl" />
            <Text className="font-bold text-[16px] ml-1">{item?.name}</Text>
            <Text className="text-gray-400 ml-1">{item?.contactPerson}</Text>
            <View className="bg-purple-300 rounded-md p-1 self-start ml-1">
                <Text className="text-purple-700">{item?.category}</Text>
            </View>
        </TouchableOpacity>
    )
}
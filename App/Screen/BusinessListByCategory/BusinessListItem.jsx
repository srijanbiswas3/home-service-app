import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function BusinessListItem({ business, booking }) {

    const navigation = useNavigation();
    const [statusStyle, setStatusStyle] = useState('')

    useEffect(() => {
        getstatusStyle()
    }, [booking?.bookingStatus])


    const getstatusStyle = () => {
        switch (booking?.bookingStatus) {
            case "Booked":
                setStatusStyle("bg-green-300");
                break
            case "InProgress":
                setStatusStyle("bg-purple-300");
                break

            case "Completed":
                setStatusStyle("bg-blue-300")
                break

            case "Cancelled":
                setStatusStyle("bg-red-300")
        }
    }

    return (
        <TouchableOpacity onPress={() => navigation.push('business-detail', {
            business: business
        })} className="bg-white flex-row rounded-2xl p-2 mx-4 my-2 shadow-sm">

            <Image source={{ uri: business?.images[0]?.url }} className="h-full w-28 mr-4 bg-black rounded-xl" />
            <View className="m-3 justify-between">
                <Text className="text-sm text-gray-500">{business?.contactPerson}</Text>
                <Text className="font-bold text-xl ">{business?.name}</Text>
                {!booking ? <View className="flex-row items-end">
                    <MaterialIcons name="location-on" size={24} color="purple" />
                    <Text className="text-sm"> {business?.address}</Text>
                </View> :
                    <View>
                        <View className={`rounded ${statusStyle} p-2 self-start`}>
                            <Text className="text-purple-700">{booking?.bookingStatus}</Text>
                        </View>
                        <View className="flex-row mt-3">
                            <FontAwesome name="calendar" size={30} color="purple" />
                            <View className="">
                                <Text className="ml-2">{booking?.date} </Text>
                                <Text className=" ml-2 font-bold text-end">{booking?.time}</Text>
                            </View>
                        </View>
                    </View>

                }

            </View>
        </TouchableOpacity>
    )
}
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Modal, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Heading from '../../Components/Heading'
import { MaterialIcons } from '@expo/vector-icons';
import BussinessPhotos from './BussinessPhotos';
import BussinessAboutMe from './BussinessAboutMe';
import BookingModal from './BookingModal';

export default function BusinessDetailScreen() {
    const param = useRoute().params
    const [businessDetail, setBusinessDetail] = useState(param.business)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        console.log(param.business)
    }, [param])
    const navigation = useNavigation();


    return businessDetail && (
        <View>
            <ScrollView className="h-[90%]">
                <TouchableOpacity onPress={() => navigation.goBack()} className="p-3 flex-row items-center absolute z-10">
                    <Ionicons name="arrow-back" size={30} color="white" />
                    <Text className="text-xl mx-2 font-bold">{param.category}</Text>
                </TouchableOpacity>
                <Image source={{ uri: businessDetail?.images[0].url }} className="h-60 w-screen" />
                <View className="p-4">
                    <Text className="text-xl font-bold">{businessDetail?.name}</Text>
                    <View className="flex-row items-center">
                        <Text className="text-purple-700 text-lg">{businessDetail?.contactPerson}</Text>
                        <View className="bg-purple-200 p-2 rounded-md mx-2">
                            <Text className="text-purple-700">{businessDetail?.category}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-end mt-2">
                        <MaterialIcons name="location-on" size={24} color="purple" />
                        <Text className="">{businessDetail?.address}</Text>
                    </View>
                    <BussinessAboutMe businessDetail={businessDetail} />
                    <BussinessPhotos businessDetail={businessDetail} />

                </View>

            </ScrollView>
            <View className="flex-row mt-2 px-3">
                <TouchableOpacity className=" h-14 border-2 border-purple-700 rounded-full w-full items-center justify-center flex-1 mx-2 p-1">
                    <Text className=" font-bold text-center text-purple-700">Message</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModal(true)} className=" h-14 border-2 border-purple-700 rounded-full w-full items-center justify-center flex-1 mx-2 bg-purple-700 p-1">
                    <Text className=" font-bold text-center text-white">Book Now</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide' visible={showModal} onRequestClose={() => setShowModal(false)} >
                <SafeAreaView>
                    <BookingModal setShowModal={setShowModal} businessId={businessDetail?.id} />
                </SafeAreaView>
            </Modal>
        </View>
    )
}
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';

export default function BusinessListByCategory() {
    const [businessListByCategory, setBusinessListByCategory] = useState([])
    useEffect(() => {
        console.log(param.category)
        param && getBusinessByCategory()
    }, [param])

    const getBusinessByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category).then(resp => {
            console.log(resp.businessLists)
            setBusinessListByCategory(resp?.businessLists)
            console.log(businessListByCategory)

        })
    }
    const navigation = useNavigation();
    const param = useRoute().params
    return (
        <View className=" h-full">
            <TouchableOpacity onPress={() => navigation.goBack()} className="p-3 flex-row items-center">
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text className="text-xl mx-2 font-bold">{param.category}</Text>
            </TouchableOpacity>

            {businessListByCategory.length > 0 ? (
                <FlatList
                    data={businessListByCategory}
                    renderItem={({ item, index }) => (
                        <BusinessListItem business={item} />
                    )} />
            ) :
                <Text className="text-center mt-20 text-xl ">No Business Found</Text>
            }

        </View>
    )
}
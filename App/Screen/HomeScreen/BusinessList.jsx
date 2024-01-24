import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BusinessListItemSmall from './BusinessListItemSmall'

export default function BusinessList() {
    const [businessLists, setBusinessLists] = useState([])
    useEffect(() => {
        getBusinessList()
    }, [])


    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp => {
            console.log(resp?.businessLists)
            setBusinessLists(resp?.businessLists);
        });
    }
    return (
        <View>
        <Heading heading="Offers For You" isViewAll={true}/>
        <FlatList
            data={businessLists}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View className="mx-2">
                   <BusinessListItemSmall item={item}/>
                </View>
            )}
        />


    </View>
    )
}
import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
export default function BussinessPhotos({businessDetail}) {
    return (
        <View>
            <Heading heading={'Photos'} />
            <FlatList
                data={businessDetail.images}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} className="h-36 w-full m-1 flex-1 rounded-lg" />
                )}

            />
        </View>
    )
}
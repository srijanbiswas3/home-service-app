import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'

export default function Slider() {
    const [sliders, setSliders] = useState([])
    useEffect(() => {

        getSliders()
    }, [])


    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {

            console.log(resp?.sliders)
            setSliders(resp?.sliders)
        })
    }

    return (
        <View>
            <Heading heading="Offers For You" isViewAll={false}/>
            <FlatList
                data={sliders}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View className="mx-2 w-60 h-32">
                        <Image source={{ uri: item?.image?.url }} className="h-32 w-60 rounded-2xl" />
                    </View>
                )}
            />


        </View>
    )
}
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import { useNavigation } from '@react-navigation/native'

export default function Category() {

    const [categories, setCategories] = useState([])
    const [itemcount, setItemcount] = useState(3)
    useEffect(() => {
        getCategory();
    }, [])

    const navigation=useNavigation();


    const getCategory = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp?.categories)
            setCategories(resp?.categories)
        })
    }
    return (
        <View>
            <Heading heading={"Categories"} isViewAll={true} itemcount={itemcount} setItemcount={setItemcount} />
            <View className="items-center">
                <FlatList
                    data={categories}
                    numColumns={4}
                    renderItem={({ item, index }) => index <= itemcount && (
                        <TouchableOpacity onPress={()=>navigation.push('business-list',{
                            category:item.name
                        })} className="mx-3 my-2 items-center ">
                            <Image source={{ uri: item?.icon?.url }} className="h-14 w-14 rounded-full" />
                            <Text className="text-xs font-medium mt-1">{item?.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>



        </View>
    )
}
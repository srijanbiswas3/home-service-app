import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Heading({ heading, isViewAll = false, itemcount, setItemcount }) {

    const [isExpanded, setIsExpanded] = useState(false)
    const expandItems = () => {
        setItemcount(10)
        console.log(itemcount)
        setIsExpanded(true)
    }
    const collaspeItems = () => {
        setItemcount(3)
        console.log(itemcount)
        setIsExpanded(false)
    }
    return (
        <View className="flex-row justify-between mt-4 mb-2">
            <Text className="text-lg font-bold">{heading}</Text>

            {isViewAll && !isExpanded && <Text className="text-sm" onPress={expandItems} >View All</Text>}

            {isViewAll && isExpanded && <Text className="text-sm" onPress={collaspeItems} >Colaspe All</Text>}
        </View>
    )
}
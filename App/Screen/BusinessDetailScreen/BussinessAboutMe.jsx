import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'

export default function BussinessAboutMe({ businessDetail }) {
    const [isReadMore, setIsReadMore] = useState(false)
    return (
        <View>
            <Heading heading={"About Me"} />
            <Text className="text-sm" numberOfLines={isReadMore ? 10 : 4}>{businessDetail?.about}</Text>
            <Text className="text-purple-700 self-start mt-1" onPress={() => setIsReadMore(!isReadMore)}>{isReadMore ? '...read less' : 'read more...'}</Text>

        </View>
    )
}
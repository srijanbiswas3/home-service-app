import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <View className="p-4">
        <Slider />
        <Category />
        <BusinessList/>
      </View>

    </ScrollView>
  )
}
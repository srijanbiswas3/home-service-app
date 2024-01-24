import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategory/BusinessListItem'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function BookingScreen() {
  const [bookings, setBookings] = useState()
  const [loading, setLoading] = useState(false)

  const { user } = useUser()

  const navigate = useNavigation()

  useEffect(() => {

    user && getBookings()
  }, [user])



  const getBookings = () => {
    setLoading(true)
    GlobalApi.getBookings(user.primaryEmailAddress.emailAddress).then(resp => {
      setBookings(resp?.bookings)
      console.log(resp)
      setLoading(false)
    })
  }
  return (
    <View className="h-screen">
      <TouchableOpacity onPress={() => navigate.goBack()} className="flex-row items-center p-4">
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text className="text-xl mx-2 font-bold">My Bookings</Text>
      </TouchableOpacity>
      <View className="h-screen">
        <FlatList
          data={bookings}
          onRefresh={() => getBookings()}
          refreshing={loading}
          renderItem={({ item }) => (
            < BusinessListItem business={item?.businessList}
              booking={item} />
          )}
        />
      </View>

    </View>
  )
}
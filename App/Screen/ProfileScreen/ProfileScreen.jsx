import { View, Text,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import {useAuth } from '@clerk/clerk-expo';
import { AntDesign } from '@expo/vector-icons';

export default function ProfileScreen() {

  const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
  return (
    <View className='p-4 h-screen'>
      <Text className='font-bold text-xl'>ProfileScreen</Text>
      <Text>Home</Text>
      <Text>Booking</Text>

      <TouchableOpacity onPress={()=>signOut()} className='items-center'>
      <AntDesign name="logout" size={36} color="black" />
      <Text>Logout</Text>
      </TouchableOpacity>
     
    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screen/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailScreen from '../Screen/BusinessDetailScreen/BusinessDetailScreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';

const Stack = createStackNavigator();

export default function BookingNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="booking" component={BookingScreen} />
            <Stack.Screen name="business-detail" component={BusinessDetailScreen} />
            {/* <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}
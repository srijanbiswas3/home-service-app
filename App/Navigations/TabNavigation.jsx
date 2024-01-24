import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import BookingNavigation from './BookingNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#9333ea",
            }}>
                <Tab.Screen name="home" component={HomeNavigation} options={{
                    tabBarLabel: ({ color }) => (
                        <Text className="text-sm -mt-2" style={{ color: color }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={size} color={color} />
                    ),
                }} />
               <Tab.Screen name="booking" component={BookingNavigation} options={{
                    tabBarLabel: ({ color }) => (
                        <Text className="text-sm -mt-2" style={{ color: color }}>Bookings</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="book-open" size={size} color={color} />
                    )
                }} />
                <Tab.Screen name="profile" component={ProfileScreen} options={{
                    tabBarLabel: ({ color }) => (
                        <Text className="text-sm -mt-2" style={{ color: color }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" size={size} color={color} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
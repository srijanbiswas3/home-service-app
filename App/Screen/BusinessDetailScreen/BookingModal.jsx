import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import CalendarPicker from "react-native-calendar-picker";
import { toDate } from 'date-fns';
import Heading from '../../Components/Heading';
import { Platform } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';


export default function BookingModal({ setShowModal, businessId }) {
    const [timeList, setTimeList] = useState()
    const [selectedTime, setSelectedTime] = useState()
    const [note, setNote] = useState('')
    const [selectedStartDate, setSelectedStartDate] = useState();

    const { user } = useUser();
    useEffect(() => {
        getTime()


    }, [])

    const getTime = () => {
        const timeList = []
        for (var i = 8; i < 12; i++) {
            timeList.push(i + ":00 AM")
            timeList.push(i + ":30 AM")
        }
        timeList.push("12:00 PM")
        timeList.push("12:30 PM")
        for (var i = 1; i <= 7; i++) {
            timeList.push(i + ":00 PM")
            timeList.push(i + ":30 PM")
        }
        setTimeList(timeList)
    }


    const onDateChange = (date, type) => {
        setSelectedStartDate(date.toDateString());

    };

    const createBooking = () => {
        if (!selectedTime || !selectedStartDate) {
            Alert.alert("Please Fill the Date and time!")
            return;
        }
        const booking = {
            userName: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            date: selectedStartDate,
            time: selectedTime,
            note: note,
            businessId: businessId

        }
        console.log(booking)
        GlobalApi.createBooking(booking).then(resp => {
            console.log("Resp", resp);

            Alert.alert("Booking Succesfull!")
            setShowModal(false)
        })
    }


    return (
        <ScrollView className="p-3">
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'android' ? -64 : 64}>
                <TouchableOpacity onPress={() => setShowModal(false)} className="flex-row items-center">
                    <Ionicons name="arrow-back" size={30} color="black" />
                    <Text className="text-xl mx-2 font-bold">Booking</Text>
                </TouchableOpacity>

                <View className="bg-purple-200 rounded-2xl mt-3 py-3">
                    <CalendarPicker
                        // startFromMonday={true}
                        allowRangeSelection={false}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + (3600 * 1000 * 24 * 180))} //180- days
                        width={340}
                        todayBackgroundColor={'grey'}
                        selectedDayColor="purple"
                        selectedDayTextColor={"white"}
                        selec
                        textStyle={{
                            fontFamily: 'outfit-medium',
                            color: '#000000',
                        }}
                        onDateChange={onDateChange}
                    />
                </View>

                <Heading heading={'Select Time Slot'} />
                <FlatList
                    data={timeList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => setSelectedTime(item.toString())} className={`m-2 p-2 rounded-full ${selectedTime === item ? "bg-purple-700" : ''} border-purple-300 border-2`}>
                                <Text className="text-purple-300 font-bold">{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <View>
                    <Text>SELECTED DATE:{selectedStartDate} : {selectedTime}</Text>
                </View>
                <Heading heading={"Add a Note"} />
                <TextInput multiline={true} numberOfLines={4} textAlignVertical='top' value={note} placeholder='Add a Note... ' onChangeText={text=>setNote(text)} className="border-2 border-purple-300 h-40 rounded-xl p-4 " />

                <TouchableOpacity onPress={() => createBooking()} className=" h-14 border-2 my-3 border-purple-700 rounded-full w-full items-center justify-center bg-purple-700">
                    <Text className=" font-bold text-center text-white">Confirm and Book</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
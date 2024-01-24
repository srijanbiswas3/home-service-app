import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();


export default function Login() {
    if(Platform.OS==='android')
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View className="items-center h-screen justify-end">
            <Image source={require("./../../../assets/laptop.avif")}
                className="w-60 h-60 mt-64 rounded-lg border-8"
            />
            <View className="p-6 w-full bg-purple-600 h-1/2 border-purple-700 rounded-t-3xl">
                <Text className="text-white text-2xl text-center"> Lets Find
                    <Text className="font-bold"> Professional Cleaning and repair&nbsp;
                    </Text>
                    Service</Text>
                <Text className="text-white text-lg text-center mt-4">Best App to find services near you which deliver profesional services</Text>

                <TouchableOpacity onPress={onPress} className="bg-white rounded-xl p-4 mt-5" >
                    <Text className="text-purple-700 text-center">Lets Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3  rounded-full  border border-gray ">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">New York, NYC</Text>
                    </View>
                </View>

                <View className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="25" width="25" strokeWidth={2.5} stroke="white" />
                </View>




            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

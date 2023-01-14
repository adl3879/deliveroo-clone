import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00ccbb] flex-1">
            <SafeAreaView className="z-50 pt-10">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-light">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls",
                            }}
                            className="w-20 h-20"
                        />
                    </View>

                    <Progress.Bar color="#00ccbb" indeterminate={true} size={30} />
                    <Text className="mt-5 text-gray-500">Your order at {restaurant.title} is on the way</Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className="flex-1 z-10 -mt-10"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={restaurant.title}
                    description={restaurant.description}
                    identifier="origin"
                    pinColor="#00ccbb"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-12 w-12 bg-gray-300 rounded-full p-4 ml-5"
                />
                <View className="flex-1">
                    <Text className="text-lg">Toyosi</Text>
                    <Text className="text-gray-400">Your rider</Text>
                </View>

                <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call me</Text>
            </SafeAreaView>
        </View>
    );
}

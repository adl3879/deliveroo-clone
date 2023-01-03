import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

export default function RestaurantScreen() {
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat,
            //
        },
    } = useRoute<any>();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="w-full h-56 bg-gray-300 p-4"
                    //
                />

                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                >
                    <ArrowLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row gap-2 my-1">
                        <View className="flex-row items-center gap-1">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-sm text-gray-500">
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>

                        <View className="flex-row items-center gap-1">
                            <MapPinIcon color="gray" opacity={0.5} size={22} />
                            <Text className="text-sm text-gray-500">Nearby . {address}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

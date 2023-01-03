import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-sm">Deliver Now</Text>
                    <View className="flex-row items-center">
                        <Text className="font-bold text-xl">Current Location</Text>
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </View>
                </View>

                <View>
                    <UserIcon size={35} color="#00ccbb" />
                </View>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
                </View>
                <AdjustmentsVerticalIcon color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Categories />

                <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" />
                <FeaturedRow id="2" title="Featured" description="Paid placements from our partners" />
                <FeaturedRow id="3" title="Featured" description="Paid placements from our partners" />
            </ScrollView>
        </SafeAreaView>
    );
}

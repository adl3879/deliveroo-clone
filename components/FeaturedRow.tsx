import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

export interface FeaturedRowProps {
    id: string;
    title: string;
    description: string;
}

export default function FeaturedRow({ id, title, description }: FeaturedRowProps) {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* RestaurantCards */}
            </ScrollView>
        </View>
    );
}
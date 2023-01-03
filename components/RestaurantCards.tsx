import { View, Text } from "react-native";
import React from "react";

export interface RestaurantCardsProps {
    id: string;
    imgUrl: string;
    title: string;
    rating: string;
    genre: string;
    address: string;
    shortDescription: string;
    dishes: string[];
    long: number;
    lat: number;
}

export default function RestaurantCards({
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
}: RestaurantCardsProps) {
    return (
        <View>
            <Text>RestaurantCards</Text>
        </View>
    );
}

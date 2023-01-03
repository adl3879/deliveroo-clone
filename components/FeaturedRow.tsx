import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import sanityClient from "../sanity";

export interface FeaturedRowProps {
    id: string;
    title: string;
    description: string;
}

export default function FeaturedRow({ id, title, description }: FeaturedRowProps) {
    const [restaurants, setRestaurants] = useState<any>([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[] -> {
                    ...,
                    dishes[] ->,
                    type -> {
                        name
                    }
                },
            }[0]
            `,
                { id }
            )
            .then((data) => {
                setRestaurants(data.restaurants);
            });
    }, [id]);

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

                {restaurants.map((restaurant: any) => (
                    <RestaurantCards
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        address={restaurant.address}
                        genre={restaurant.category}
                        shortDescription={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

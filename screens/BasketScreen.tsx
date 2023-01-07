import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const basketItems = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    console.log(restaurant);
    useMemo(() => {
        const groupedItems = basketItems.reduce((result: any, item: any) => {
            (result[item.id] = result[item.id] || []).push(item);
            return result;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [basketItems]);

    return (
        <SafeAreaView className="flex-1 bg-white pt-6">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00ccbb] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg text-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant?.title}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="rounded-full bg-gray-100 absolute top-3 right-5"
                >
                    <XCircleIcon color="#00ccbb" height={50} width={50} />
                </TouchableOpacity>

                <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    ></Image>
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

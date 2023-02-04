import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems, removeFromBasket, selectBasketTotal } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const basketItems = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

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

                <ScrollView className="divide-y divide-gray-100">
                    {Object.entries(groupedItemsInBasket).map(([key, items]: [number, any[]]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00ccbb]">{items.length} x</Text>
                            <Image source={{ uri: urlFor(items[0].image).url() }} className="h-12 w-12 rounded-full" />
                            <Text className="flex-1">{items[0].name}</Text>

                            <Text>
                                <Currency quantity={items[0].price} currency="GBP" />
                            </Text>

                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                <Text className="text-[#00ccbb] text-xs">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={basketTotal} currency="GBP" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery Fee</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={5.99} currency="GBP" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text>Order Total</Text>
                    <Text className="font-extrabold">
                        <Currency quantity={basketTotal + 5.99} currency="GBP" />
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("PreparingOrder")}
                    className="rounded-lg bg-[#00ccbb] p-4"
                >
                    <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

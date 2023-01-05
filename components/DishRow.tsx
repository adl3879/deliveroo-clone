import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItemsWithId, removeFromBasket } from "../features/basketSlice";

export interface DishRowProps {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function DishRow({
    id,
    name,
    description,
    price,
    image,
}: //
DishRowProps) {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }));
    };

    const removeItemFromBasket = () => {
        if (items.length <= 0) return;
        dispatch(removeFromBasket({ id }));
    };

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    setIsPressed(!isPressed);
                }}
                className={clsx("bg-white border p-4 border-gray-200", {
                    "border-b-0": isPressed,
                    //
                })}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={price} currency="GBP" />
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#f3f3f4",
                            }}
                            source={{
                                uri: urlFor(image).url(),
                            }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center gap-2 py-3">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <MinusCircleIcon
                                color={items.length <= 0 ? "gray" : "#00ccbb"}
                                size={40}
                                //
                            />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color="#00ccbb" size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
}

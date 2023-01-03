import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "category"]
            `
            )
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((category: any) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
        </ScrollView>
    );
}

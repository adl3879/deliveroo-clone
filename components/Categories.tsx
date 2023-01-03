import React from "react";
import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        </ScrollView>
    );
}

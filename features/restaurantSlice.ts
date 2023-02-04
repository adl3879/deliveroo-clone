import { createSlice } from "@reduxjs/toolkit";

export interface RestaurantState {
    restaurant: {
        id: string;
        imgUrl: string;
        title: string;
        rating: number;
        genre: string;
        address: string;
        shortDescription: string;
        dishes: {
            id: string;
            imgUrl: string;
            title: string;
            price: number;
            description: string;
        }[];
    };
}

const initialState: RestaurantState = {
    restaurant: {
        id: "",
        imgUrl: "",
        title: "",
        rating: 0,
        genre: "",
        address: "",
        shortDescription: "",
        dishes: [],
    },
};

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;

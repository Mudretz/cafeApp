import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type DishesState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: DishesState = {
    entities: [],
    lastFetch: 0
}

const hotDishesSlice = createSlice({
    name: "hotDishes",
    initialState,
    reducers: {
        hotDishesReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: hotDishesReducer, actions } = hotDishesSlice;
export const { hotDishesReceved } = actions;

export default hotDishesReducer;


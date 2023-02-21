import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type DrinksState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: DrinksState = {
    entities: [],
    lastFetch: 0
}

const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers: {
        drinksReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: drinksReducer, actions } = drinksSlice;
export const { drinksReceved } = actions;

export default drinksReducer;


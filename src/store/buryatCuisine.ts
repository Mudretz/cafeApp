import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type BuryatCuisineState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: BuryatCuisineState = {
    entities: [],
    lastFetch: 0
}

const buryatCuisineSlice = createSlice({
    name: "buryatCuisine",
    initialState,
    reducers: {
        buryatCuisineReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: buryatCuisineReducer, actions } = buryatCuisineSlice;
export const { buryatCuisineReceved } = actions;

export default buryatCuisineReducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type SoupsState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: SoupsState = {
    entities: [],
    lastFetch: 0
}

const soupsSlice = createSlice({
    name: "soups",
    initialState,
    reducers: {
        soupsReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: soupsReducer, actions } = soupsSlice;
export const { soupsReceved } = actions;

export default soupsReducer;


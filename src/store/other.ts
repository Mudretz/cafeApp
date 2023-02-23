import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type OtherState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: OtherState = {
    entities: [],
    lastFetch: 0
}

const otherSlice = createSlice({
    name: "other",
    initialState,
    reducers: {
        otherReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: otherReducer, actions } = otherSlice;
export const { otherReceved } = actions;

export default otherReducer;


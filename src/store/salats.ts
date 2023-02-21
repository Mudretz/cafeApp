import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from "../types/types";

type SalatsState = {
    entities: Dishes[];
    lastFetch: number;
};

const initialState: SalatsState = {
    entities: [],
    lastFetch: 0
}

const salatsSlice = createSlice({
    name: "salats",
    initialState,
    reducers: {
        salatsReceved: (state, action: PayloadAction<Dishes[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: salatsReducer, actions } = salatsSlice;
export const { salatsReceved } = actions;

export default salatsReducer;


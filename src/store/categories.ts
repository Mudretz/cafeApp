import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../types/types";

type categoriesState = {
    entities: Categories[];
    lastFetch: number;
};

const initialState: categoriesState = {
    entities: [],
    lastFetch: 0
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoriesReceved: (state, action: PayloadAction<Categories[]>) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
        }
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
export const { categoriesReceved } = actions;

export default categoriesReducer;


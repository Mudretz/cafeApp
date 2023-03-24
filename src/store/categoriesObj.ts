import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../types/types";

type categoriesObjState = {
    entities: Categories[];
    lastFetch: number;
};

const initialState: categoriesObjState = {
    entities: [],
    lastFetch: 0
}

const categoriesObjSlice = createSlice({
    name: "categoriesObj",
    initialState,
    reducers: {
        categoriesObjReceved: (state, action: PayloadAction<Categories[] | unknown>) => {
            if (action.payload) {
                state.entities = Object.values(action.payload);
                state.lastFetch = Date.now();
            }
        }
    }
});

const { reducer: categoriesObjReducer, actions } = categoriesObjSlice;
export const { categoriesObjReceved } = actions;

export default categoriesObjReducer;


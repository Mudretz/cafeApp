import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from '../types/types';

type DishesState = {
    entities: Dishes[],
    lastFetch: number
};

const initialState: DishesState = {
    entities: [],
    lastFetch: 0
}

const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {
        dishesReceved: (state, action: PayloadAction<Dishes[] | any>) => {
            if (action.payload) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            }
        },
        dishesUpdate: (state, action: PayloadAction<Dishes>) =>  {
            state.entities.push(action.payload);
        },
        deleteDish: (state, action) => {
            state.entities = state.entities.filter((item) => item.id !== action.payload);
        },
        dishEditUpdate: (state, action: PayloadAction<Dishes>) => {
            state.entities[
                state.entities.findIndex((item) => item.id === action.payload.id)
            ] = action.payload
        }
    }
});

const { reducer: dishesReducer, actions } = dishesSlice;
export const { dishesReceved, dishesUpdate, deleteDish, dishEditUpdate } = actions;

export default dishesReducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket } from "../types/types";

type BasketState = {
    entities: Basket[];
};

const initialState: BasketState = {
    entities: [],
}

const hotBasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketReceved: (state, action: PayloadAction<Basket[]>) => {
            state.entities = action.payload;
        },
        addItemsBasket: (state, action: PayloadAction<Basket>) => {
            state.entities.push(action.payload);
        },
        basketUpdate: (state, action: PayloadAction<Basket>) => {
            state.entities[
                state.entities.findIndex((u) => u.id === action.payload.id)
            ] = action.payload;
        },
        deleteItemsBasket: (state, action) => {
            state.entities = state.entities.filter(item => item.id !== action.payload);
        },
        allDeleteItemsBasket: (state) => {
            state.entities = [];
        },
    }
});

const { reducer: basketReducer, actions } = hotBasketSlice;
export const { basketReceved, addItemsBasket, basketUpdate, deleteItemsBasket, allDeleteItemsBasket } = actions;

export default basketReducer;


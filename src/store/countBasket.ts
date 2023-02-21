import { createSlice } from "@reduxjs/toolkit";

type CountBasketState = {
    entities: number;
};

const initialState: CountBasketState = {
    entities: 0,
}

const countBasketSlice = createSlice({
    name: "countBasket",
    initialState,
    reducers: {
        AddCountBasket: (state, action) => {
            state.entities += action.payload;
        },
        decrementCountBasket: (state, action) => {
            state.entities -= action.payload;
        }
    }
});

const { reducer: countBasketReducer, actions } = countBasketSlice;
export const { AddCountBasket, decrementCountBasket } = actions;

export default countBasketReducer;


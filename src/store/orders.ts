import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders } from "../types/types";

type OrdersState = {
    entities: Orders[],
    count: number
};

const initialState: OrdersState = {
    entities: [],
    count: 1
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        ordersReceved: (state, action: PayloadAction<Orders[]>) => {
            state.entities = action.payload;
        },
        addOrders: (state, action: PayloadAction<Orders>) => {
            state.entities.push(action.payload);
            state.count += 1;
        },
    }
});

const { reducer: ordersReducer, actions } = ordersSlice;
export const { ordersReceved, addOrders } = actions;

export default ordersReducer;


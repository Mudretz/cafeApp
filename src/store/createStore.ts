import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import categoriesReducer from "./categories";
import countBasketReducer from "./countBasket";
import hotDishesReducer from "./hotDishesStore";
import soupsReducer from "./soupsStore";
import buryatCuisineReducer from './buryatCuisine';
import salatsReducer from "./salats";
import drinksReducer from "./drinks";


const rootReducer = combineReducers({
    soups: soupsReducer,
    hotDishes: hotDishesReducer,
    basket: basketReducer,
    countBasket: countBasketReducer,
    categories: categoriesReducer,
    buryatCuisine: buryatCuisineReducer,
    salats: salatsReducer,
    drinks: drinksReducer
});

const store = configureStore({
    reducer: rootReducer
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
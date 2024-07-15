import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./food/food.api";
import { cartReducer, favoriteReducer } from "./food/food.slices";
import { timeoutMiddleware } from "./food/food.middleware";

export const store = configureStore({
	reducer: {
		[foodApi.reducerPath]: foodApi.reducer,
		favorite: favoriteReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(foodApi.middleware, timeoutMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;

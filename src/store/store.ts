import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./food/food.api";
import { cartReducer, favoriteReducer } from "./food/food.slices";

export const store = configureStore({
	reducer: {
		[foodApi.reducerPath]: foodApi.reducer,
		favorite: favoriteReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(foodApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

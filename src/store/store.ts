import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./food/food.api";
import { cartReducer } from "@/components/cart/cart.slice";
import { timeoutMiddleware } from "./food/food.middleware";

export const store = configureStore({
	reducer: {
		[foodApi.reducerPath]: foodApi.reducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(foodApi.middleware, timeoutMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;

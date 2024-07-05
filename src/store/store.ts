import {configureStore} from '@reduxjs/toolkit';
import {foodApi} from "./food/food.api";


export const store = configureStore({
	reducer: {[foodApi.reducerPath]: foodApi.reducer},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(foodApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

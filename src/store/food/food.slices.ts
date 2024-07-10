import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISectionItem } from "./food.types";

const initialState: ISectionItem[] = [];

const favoriteSlice = createSlice({
	name: "favorite",
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<ISectionItem>) => {
			const isExist = state.some((item) => item.id === action.payload.id);
			if (isExist) {
				return state.filter((item) => item.id !== action.payload.id);
			} else {
				state.push(action.payload);
			}
		}
	}
});

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ISectionItem>) => {
			state.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<ISectionItem>) => {
			return state.filter((item) => item.id !== action.payload.id);
		}
	}
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

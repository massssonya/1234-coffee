import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ISectionItem } from "./food.types";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: <ISectionItem[]>[],
	reducers: {
		addFavorite: (state, action: PayloadAction<ISectionItem>) => {
			// state.push(action.payload);
			return [...state, action.payload];
		},
		removeFavorite: (state, action: PayloadAction<ISectionItem>) => {
			return state.filter((item) => item.id !== action.payload.id);
		}
	}
});

const cartSlice = createSlice({
	name: "cart",
	initialState: <ICartItem[]>[],
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			if (state.some((item) => item.id === action.payload.id)) {
				return state.map((item) => {
					if (item.id === action.payload.id) {
						return {
							...item,
							quantity: item.quantity + action.payload.quantity
						};
					}
					return item;
				});
			}

			return [...state, action.payload];
		},
		removeItem: (state, action: PayloadAction<ICartItem>) => {
			const oldQuantity =
				state.find((item) => item.id === action.payload.id)?.quantity || 0;
			const newQuantity = oldQuantity - action.payload.quantity;
			if (newQuantity === 0) {
				return state.filter((item) => item.id !== action.payload.id);
			} else {
				return state.map((item) => {
					if (item.id === action.payload.id) {
						return {
							...item,
							quantity: newQuantity
						};
					}
					return item;
				});
			}
		}
	}
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

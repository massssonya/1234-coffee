import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartItem } from "@store/types";

const calculateTotalPrice = (items: ICartItem[]) => {
	return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
	name: "cart",
	initialState: <ICart>{
		items: [],
		totalPrice: 0
	},
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			const { id } = action.payload;
			const { items } = state;
			const addedItem = items.find((item) => item.id === id);
			if (addedItem) {
				items.map((item) => {
					if (item.id === id) return { ...item, quantity: item.quantity++ };
				});
			} else items.push({ ...action.payload, quantity: 1 });
			state.totalPrice = calculateTotalPrice(items);
		},

		removeOneItem: (state, action: PayloadAction<string>) => {
			const { items } = state;
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				existingItem.quantity--;
				if (existingItem.quantity === 0) {
					state.items = items.filter((item) => item.id !== id);
				}
			}

			state.totalPrice = calculateTotalPrice(items);
		},

		removeItem: (state, action: PayloadAction<string>) => {
			const itemId = action.payload;
			const updatedCartItems = state.items.filter((item) => item.id !== itemId);
			const updatedTotalPrice = updatedCartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			return {
				...state,
				items: updatedCartItems,
				totalPrice: updatedTotalPrice
			};
		}
	}
});

export const cartSelectors = cartSlice.selectors;
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

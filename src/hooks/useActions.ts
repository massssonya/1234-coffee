import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions, favoriteActions } from "@store/food/food.slices";

const allActions = {
	...favoriteActions,
	...cartActions
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};

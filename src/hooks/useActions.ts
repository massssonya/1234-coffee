import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { favoriteActions } from "@store/food/food.slices";

const allActions = {
	...favoriteActions
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};

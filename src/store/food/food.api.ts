import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISection } from "./food.types";
import { sortItems } from "../../utils";

export const foodApi = createApi({
	reducerPath: "api/food",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3001/"
	}),
	endpoints: (build) => ({
		getFoods: build.query<ISection[], void>({
			query: () => ({ url: `food` }),

			transformResponse(res: ISection[]) {
				return res.map((item) => {
					const sortedItems = item.items
						? sortItems(item.items, (a, b) => a.isDisabled - b.isDisabled)
						: [];
					return {
						...item,
						items: sortedItems
					};
				});
			}
		})
	})
});

export const { useGetFoodsQuery } = foodApi;

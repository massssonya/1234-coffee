import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISection } from "./food.types";

export const foodApi = createApi({
	reducerPath: "api/food",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
	endpoints: (build) => ({
		getFoods: build.query<ISection[], void>({ query: () => `food` })
	})
});



export const { useGetFoodsQuery } = foodApi;

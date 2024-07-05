import { useState, useEffect } from "react";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISection } from "./interfaces";

// Define a service using a base URL and expected endpoints
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getFood: builder.query<ISection, string>({
      query: () => `food`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFoodQuery } = foodApi

// export const data: ISection[] = [
// 	{
// 		id: "season_id",
// 		title: "СЕЗОННЫЕ НАПИТКИ",
// 		items: [
// 			{
// 				id: "cold_filter_id",
// 				name: 'Холодный фильтр "Черноплодная рябина-тимьян"',
// 				price: 250,
// 				img: "/default.webp",
// 				description: "Классический холодный напиток",
// 				isDisabled: false,
// 				properties: {
// 					proteins: 22,
// 					fats: 12,
// 					carbohydrates: 22,
// 					calories: 250
// 				}
// 			}
// 		]
// 	},
// 	{ id: "breakfast_id", title: "ЗАВТРАКИ", items: [] },
// 	{ id: "starters_id", title: "СТАРТЕРЫ", items: [] },
// 	{ id: "suppers_id", title: "СУПЫ", items: [] },
// 	{ id: "hot_id", title: "ГОРЯЧЕЕ", items: [] },
// 	{ id: "sandwich_id", title: "СЭНДВИЧИ", items: [] },
// 	{ id: "coffee_id", title: "КОФЕ", items: [] },
// 	{ id: "non-coffee_id", title: "НЕ КОФЕ", items: [] },
// 	{ id: "tea_id", title: "ЧАИ", items: [] }
// ];

// const initialData: ISection[] = [];

// export const GetData = () => {
// 	const [data, setData] = useState([] as ISection[]);

// 	const getApiData = async () => {
// 		const response = await fetch("http://localhost:3001/food").then(
// 			(response) => response.json()
// 		);

// 		// Обновим состояние
// 		setData(response);
// 	};

// 	useEffect(() => {
// 		getApiData();
// 	}, []);



// 	return data;
// };

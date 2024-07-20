export interface ISection {
	id: string;
	title: string;
	items?: ISectionItem[];
}

export interface ISectionItem {
	id: string;
	name: string;
	price: number;
	img?: string;
	description?: string;
	isDisabled?: boolean;
	properties?: IProperties;
}

export interface IProperties {
	proteins?: number | string;
	fats?: number | string;
	carbohydrates?: number | string;
	calories?: number | string;
}

export interface ICartItem extends ISectionItem {
	quantity: number;
}

export interface ICart {
	items: ICartItem[];
	totalPrice: number;
}

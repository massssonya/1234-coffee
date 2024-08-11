type TSectionId = string;

export interface ISection {
	id: TSectionId;
	title: string;
	items?: ISectionItem[];
}

type TSectionItemId = string;

export interface ISectionItem {
	id: TSectionItemId;
	name: string;
	price: number;
	img?: string;
	description?: string;
	isDisabled?: boolean;
	properties?: IProperties;
}

type TProperty = string | number;

export interface IProperties {
	proteins?: TProperty;
	fats?: TProperty;
	carbohydrates?: TProperty;
	calories?: TProperty;
}

export interface ICartItem extends ISectionItem {
	quantity: number;
}

export interface ICart {
	items: ICartItem[];
	totalPrice: number;
}

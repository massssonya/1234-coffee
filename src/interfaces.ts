export interface ISection {
	id: string;
	title: string;
	items?: ISectionItem[];
}

export interface ISectionItem {
	id: number | string;
	name: string;
	price: number;
	img?: string;
	description?: string;
	isDisabled?: boolean;
	properties?: IProperties;
}

export interface IProperties {
	proteins: number | string;
	fats: number | string;
	carbohydrates: number | string;
}

import vk_logo from "@/assets/vk_logo.svg";

export type TSocial = {
	name: string;
	link: string;
	icon: string;
};

interface IContacts {
	phone: string;
	email: string;
	socials: TSocial[];
}

export const contacts: IContacts = {
	phone: "+79027096996",
	email: "5b9l6@example.com",
	socials: [
		{
			name: "VK",
			link: "https://vk.com/coffee_na_1234",
			icon: vk_logo
		}
	]
};

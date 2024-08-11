import { useRef } from "react";
import { Dial, DialOptions } from "flowbite";
import { Share2 } from "lucide-react";

import { contacts } from "@constants/contacts";

const options: DialOptions = {
	triggerType: "click"
};

const instanceOptions = {
	id: "dialContent",
	override: true
};

export const SocialButton = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const dial = new Dial(
		parentRef.current,
		triggerRef.current,
		targetRef.current,
		options,
		instanceOptions
	);

	const socials = contacts.socials.map((social) => {
		return (
			<a key={social.name} href={social.link} target="_blank">
				<button
					type="button"
					className="flex justify-center items-center w-14 h-14 rounded-lg focus:outline-none hover:scale-110 transition-all"
				>
					<img
						className="w-full h-full bg-cover"
						src={social.icon}
						alt={social.name}
					/>
				</button>
			</a>
		);
	});
	return (
		<div
			ref={parentRef}
			onMouseEnter={() => {
				dial.show();
			}}
			onMouseLeave={() => {
				dial.hide();
			}}
			className="fixed start-6 bottom-6 group z-10 max-[1024px]:hidden"
		>
			<div
				ref={targetRef}
				id="dialContent"
				className="flex flex-col items-center hidden mb-4 space-y-2"
			>
				{socials}
			</div>
			<button
				ref={triggerRef}
				type="button"
				className="flex items-center justify-center text-white bg-blue-700 rounded-lg w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
			>
				<Share2
					size={24}
					className="transition-transform group-hover:scale-110"
				/>
				<span className="sr-only">Open actions menu</span>
			</button>
		</div>
	);
};

import { contacts } from "@/constants/contacts";
import { formatPhone } from "@/utils";

export const Footer = () => {
	const { socials, phone, email } = contacts;
	return (
		<footer>
			<div className="footer-container" id="contacts">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					{formatPhone(phone)} | {email}
				</span>
				<ul>
					{socials.map((social) => (
						<li key={social.name}>
							<a
								href={social.link}
								target="_blank"
								className="mr-4 hover:underline md:mr-6"
							>
								<social.icon />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

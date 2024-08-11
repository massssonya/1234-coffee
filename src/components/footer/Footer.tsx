import { contacts } from "@constants/contacts";
import "./Footer.css";

export const Footer = () => {
	const { socials } = contacts;
	return (
		<footer>
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
		</footer>
	);
};

import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
	{ icon: <FaGithub />, path: "https://github.com/Amaldonado7" },
	{ icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ariadnamaldonado1/" },
];

interface SocialsProps {
	containerStyles?: string;
	iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return <Link key={index} href={item.path} className={iconStyles}>
					{item.icon}
				</Link>
			})}
		</div>
	)
}

export default Socials

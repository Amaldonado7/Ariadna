"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LangContext";

const navPaths = [
	{ key: "home" as const, path: "/" },
	{ key: "services" as const, path: "/services" },
	{ key: "resume" as const, path: "/resume" },
	{ key: "work" as const, path: "/work" },
];

const Nav = () => {
	const pathname = usePathname();
	const { t } = useLang();

	return (
		<nav className="flex gap-8">
			{navPaths.map(({ key, path }) => (
				<Link
					href={path}
					key={key}
					className={`${path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
				>
					{t.nav[key]}
				</Link>
			))}
		</nav>
	)
}

export default Nav;

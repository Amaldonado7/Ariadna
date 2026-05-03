"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useLang } from "@/contexts/LangContext";

const navPaths = [
	{ key: "home" as const, path: "/" },
	{ key: "services" as const, path: "/services" },
	{ key: "resume" as const, path: "/resume" },
	{ key: "work" as const, path: "/work" },
];

const MobileNav = () => {
	const pathname = usePathname();
	const { t } = useLang();

	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetTitle className="hidden" />
			<SheetContent className="flex flex-col">
				{/** logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Ariadna<span className="text-accent pl-1">.</span>
						</h1>
					</Link>
				</div>
				{/** nav */}
				<nav className="flex flex-col justify-center items-center gap-8">
					{navPaths.map(({ key, path }) => (
						<Link
							href={path}
							key={key}
							className={`${path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
						>
							{t.nav[key]}
						</Link>
					))}
					<Link href="/contact" className="text-xl capitalize hover:text-accent transition-all">
						{t.nav.hireMe}
					</Link>
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav;

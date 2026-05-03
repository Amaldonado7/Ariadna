"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { useLang } from "@/contexts/LangContext"

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className="w-9 h-9 flex items-center justify-center rounded-full border border-accent/40 hover:border-accent hover:text-accent transition-all"
		>
			{theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
		</button>
	)
}

function LangToggle() {
	const { lang, setLang } = useLang()
	return (
		<button
			onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
			className="text-xs font-bold border border-accent/40 rounded px-2 py-1 hover:border-accent hover:text-accent transition-all tracking-wider"
		>
			{lang === 'en' ? 'EN' : 'ES'}
		</button>
	)
}

const Header = () => {
	const { t } = useLang()

	return (
		<header className="py-8 xl:py-12">
			<div className="container mx-auto flex justify-between items-center">
				{/** Logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Ariadna <span className="text-accent">.</span>
					</h1>
				</Link>

				{/** Desktop nav + toggles + hire me */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<div className="flex items-center gap-3">
						<LangToggle />
						<ThemeToggle />
						<Link href="/contact">
							<Button>{t.nav.hireMe}</Button>
						</Link>
					</div>
				</div>

				{/** Mobile: toggles + hamburger */}
				<div className="xl:hidden flex items-center gap-3">
					<LangToggle />
					<ThemeToggle />
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header

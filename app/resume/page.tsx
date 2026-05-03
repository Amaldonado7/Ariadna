"use client";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { useLang } from "@/contexts/LangContext";

const skillIcons = [
	{ icon: <FaHtml5 />, name: "html 5" },
	{ icon: <FaCss3 />, name: "css 3" },
	{ icon: <FaJs />, name: "javascript" },
	{ icon: <FaReact />, name: "react.js" },
	{ icon: <SiNextdotjs />, name: "next.js" },
	{ icon: <SiTailwindcss />, name: "tailwindcss" },
	{ icon: <FaNodeJs />, name: "nodejs" },
	{ icon: <FaFigma />, name: "figma" },
];

const Resume = () => {
	const { t } = useLang();
	const { experience, education, skills, about, tabs } = t.resume;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">{tabs.experience}</TabsTrigger>
						<TabsTrigger value="education">{tabs.education}</TabsTrigger>
						<TabsTrigger value="skills">{tabs.skills}</TabsTrigger>
						<TabsTrigger value="about">{tabs.about}</TabsTrigger>
					</TabsList>

					{/** Content */}
					<div className="min-h-[70vh] w-full">
						{/** Experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-muted-theme mx-auto xl:mx-0">{experience.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => (
											<li key={index} className="bg-surface-2 h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start justify-center gap-1">
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
												<div className="flex items-center gap-3">
													<span className="size-1.5 rounded-full bg-accent"></span>
													<p>{item.company}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/** Education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-muted-theme mx-auto xl:mx-0">{education.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => (
											<li key={index} className="bg-surface-2 h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start justify-center gap-1">
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
												<div className="flex items-center gap-3">
													<span className="size-1.5 rounded-full bg-accent"></span>
													<p>{item.institution}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/** Skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-muted-theme mx-auto xl:mx-0">{skills.description}</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skillIcons.map((skill, index) => (
										<li key={index}>
											<TooltipProvider delayDuration={300}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-surface-2 rounded-xl flex justify-center items-center group">
														<div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="capitalize">{skill.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>

						{/** About */}
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-muted-theme mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => (
										<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
											<span className="text-muted-theme">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume

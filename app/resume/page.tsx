"use client";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

const about = {
	title: 'About me',
	description: "I am an Engineering Manager with a strong technical foundation and a passion for building high-performing teams. Throughout my career, I have led initiatives focused on delivery excellence, incident management, and operational reliability. I believe in creating clarity, fostering ownership, and building systems that scale — both technically and organizationally. My goal is to help teams grow while delivering meaningful impact to the business.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Ariadna Maldonado",
		},
		{
			fieldName: "Experience",
			fieldValue: "8+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Argentinian",
		},
		{
			fieldName: "Email",
			fieldValue: "ariadnanahir.maldonado@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "Spanish, English",
		},
	]
};

// Experience data
const experience = {
	icon: '/assets/resume/badge.svg',
	title: "My experience",
	description: "I have led engineering teams through operational challenges, scaling processes and improving system reliability. By strengthening incident management practices and delivery workflows, I helped increase visibility, accountability, and execution speed across teams.",
	items: [
		{
			company: "MODO",
			position: "Engineering Manager",
			duration: "2023 - Present",
		},
		{
			company: "Altimetrik Uruguay",
			position: "Senior Engineering Manager",
			duration: "2022 - 2023",
		},
		{
			company: "Digiventures",
			position: "Team Lead",
			duration: "2021 - 2022",
		},
		{
			company: "Entravision Digital",
			position: "Frontend Developer",
			duration: "2020 - 2021",
		},
		{
			company: "GlobalLogic",
			position: "Frontend Developer",
			duration: "2019 - 2020",
		},
		{
			company: "IBM",
			position: "QA Analyst",
			duration: "2018 - 2019",
		},
	]
}

// Education
const education = {
	icon: '/assets/resume/cap.svg',
	title: "My education",
	description: "My education blends technical systems knowledge with product and user-centered design, shaping my leadership perspective in engineering.",
	items: [
		{
			instituion: "Escuela Da Vinci",
			position: "Analista de Sistemas",
			duration: "2018 - present",
		},
		{
			instituion: "Coderhouse",
			position: "Diseño UX/UI",
			duration: "2020",
		},
	]
}

// Skills data
const skills = {
	title: "My skills",
	description: "Blending technical depth with engineering leadership to drive delivery, reliability, and team performance.",
	skillsList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 5",
		},
		{
			icon: <FaJs />,
			name: "javascript 5",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwindcss",
		},
		{
			icon: <FaNodeJs />,
			name: "nodejs",
		},
		{
			icon: <FaFigma />,
			name: "figma",
		},
	]
}

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn",
				}
			}}
			className="min-h-[80hv] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList
						className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
					>
						<TabsTrigger value="experience">
							Experience
						</TabsTrigger>
						<TabsTrigger value="education">
							Education
						</TabsTrigger>
						<TabsTrigger value="skills">
							Skills
						</TabsTrigger>
						<TabsTrigger value="about">
							About me
						</TabsTrigger>
					</TabsList>

					{/** Content */}
					<div className="min-h-[70vh] w-full">
						{/** experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600ox] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start justify-center gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-3">
														<span className="size-1.5 rounded-full bg-accent"></span>
														<p>{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/** education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600ox] text-white/60 mx-auto xl:mx-0">{education.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start justify-center gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-3">
														<span className="size-1.5 rounded-full bg-accent"></span>
														<p>{item.instituion}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/** skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillsList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={300}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>

						{/** about 2:08:15 */}
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										)
									})}
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { useLang } from "@/contexts/LangContext";

type FormStatus = 'idle' | 'success'

const Contact = () => {
	const { t } = useLang();
	const [status, setStatus] = useState<FormStatus>('idle');

	const info = [
		{ icon: <FaEnvelope />, title: t.contact.infoEmail, description: 'ariadnanahir.maldonado@gmail.com' },
		{ icon: <FaMapMarkerAlt />, title: t.contact.infoAddress, description: 'Villa Gesell, Argentina' },
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('success');
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.44, ease: "easeIn" }
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-[30px]">
					{/** Form */}
					<div className="md:w-[54%] order-2 md:order-none">
						<div className="flex flex-col gap-6 p-10 bg-surface-1 rounded-xl min-h-[420px]">
							{status === 'success' ? (
								<div className="flex flex-col items-center justify-center flex-1 gap-6 text-center py-8">
									<FaCheckCircle className="text-accent text-6xl" />
									<h3 className="text-3xl font-bold text-accent">{t.contact.successTitle}</h3>
									<p className="text-muted-theme max-w-[300px]">{t.contact.successText}</p>
									<Button onClick={() => setStatus('idle')} variant="outline">
										{t.contact.sendAnother}
									</Button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="flex flex-col gap-6">
									<h3 className="text-4xl text-accent">{t.contact.title}</h3>
									<p className="text-muted-theme">{t.contact.intro}</p>
									{/** Inputs */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<Input name="firstname" placeholder={t.contact.firstName} />
										<Input name="lastname" placeholder={t.contact.lastName} />
										<Input name="email" type="email" placeholder={t.contact.email} />
										<Input name="phone" placeholder={t.contact.phone} />
									</div>
									{/** Select */}
									<Select>
										<SelectTrigger className="w-full">
											<SelectValue placeholder={t.contact.selectPlaceholder} />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>{t.contact.selectPlaceholder}</SelectLabel>
												{t.contact.services.map((s) => (
													<SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									{/** Textarea */}
									<Textarea
										className="h-[200px]"
										placeholder={t.contact.messagePlaceholder}
									/>
									{/** Button */}
									<Button size="lg" className="max-w-40" type="submit">
										{t.contact.send}
									</Button>
								</form>
							)}
						</div>
					</div>

					{/** Info */}
					<div className="flex-1 flex items-center justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => (
								<li key={index} className="flex items-center gap-6">
									<div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-surface-1 text-accent rounded-md">
										<div className="text-[28px]">{item.icon}</div>
									</div>
									<div className="flex-1">
										<p className="text-muted-theme">{item.title}</p>
										<h3 className="text-xl">{item.description}</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Contact

"use client"
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		setHydrated(true);
	}, []);
	if (!hydrated) {
		return null;
	}
	function scrollToBottom () {
		window.location.hash = '#contact'
	}
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-50 xl:items-center">
		<motion.div
			initial={{
			opacity: 0,
			}}
			animate={{
			opacity: 1,
			}}
			transition={{
			ease: "linear",
			duration: 1,
			x: { duration: 0.5 },
			}}
			className="flex flex-row items-center"
		>
			{socials.map((social) => (
				<SocialIcon
					key={social._id}
					className="cursor-pointer"
					url={social.url}
					bgColor="transparent"
					fgColor="#D8BFD8"
				/>
			))}
		</motion.div>
		<div>
			<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				ease: "linear",
				duration: 1,
				x: { duration: 0.5 },
			}}
			className="flex flex-row items-center"
			>
			<SocialIcon
				className="cursor-pointer"
				network="email"
				bgColor="transparent"
				fgColor="#D8BFD8"
				onClick={scrollToBottom}
			/>
			<p className="uppercase hidden md:inline-flex text-sm text-neutral-400">
				Email Me
			</p>
			</motion.div>
		</div>
		</header>
	);
}

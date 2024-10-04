"use client";
import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useMotionValueEvent(scrollY, "change", (current) => {
		if (current === 0) {
			setVisible(true);
		} else if (current > lastScrollY) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setLastScrollY(current);
	});

	return (
		<AnimatePresence mode="wait">
			{visible && (
				<motion.div
					initial={{
						opacity: 0,
						y: -100,
					}}
					animate={{
						y: visible ? 0 : -100,
						opacity: visible ? 1 : 0,
					}}
					transition={{
						duration: 0.2,
					}}
					className={cn(
						"flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] bg-black-100 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4",
						className
					)}
				>
					{navItems.map((navItem: any, idx: number) => (
						<Link
							key={`link=${idx}`}
							href={navItem.link}
							className={cn(
								"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
							)}
						>
							<span className="block sm:hidden">{navItem.icon}</span>
							<span className="hidden sm:block text-sm">{navItem.name}</span>
						</Link>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

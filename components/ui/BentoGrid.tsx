/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { LuCopyCheck } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-7 md:grid-row-7 gap-3 lg:gap-6 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	id,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	id: number;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		if (typeof navigator !== "undefined" && navigator.clipboard) {
			navigator.clipboard.writeText("j.torres3.dev@gmail.com");
			setCopied(true);
		}
	};
	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div className={`${id == 4 && "flex justify-center"} h-full`}>
				<div
					className={`${
						(id == 6 && "content-center") || (id == 7 && "content-center")
					} w-full h-full absolute`}
				>
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center")}
						/>
					)}
				</div>

				<div
					className={`absolute right-0 -bottom-5 ${
						id == 5 && "w-full opacity-80"
					}`}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				{id === 4 && (
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
					)}
				>
					<div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
						{title}
					</div>
					<div className="font-sans font-extralight max-w-40 md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>

					{id === 2 && <GlobeDemo />}

					{id === 4 && (
						<div className="mt-5 relative">
							<div className={`absolute -bottom-5 right-0`}>
								<Lottie
									options={{
										loop: copied,
										autoplay: copied,
										animationData: animationData,
										rendererSettings: {
											preserveAspectRatio: "xMidYMid slice",
										},
									}}
								/>
							</div>

							<MagicButton
								title={copied ? "Email copied" : "Copy my email"}
								icon={copied ? <LuCopyCheck /> : <IoCopyOutline />}
								position="left"
								otherClasses="!bg-[#161a31"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>{" "}
		</div>
	);
};

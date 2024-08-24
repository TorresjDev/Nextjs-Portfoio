import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

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
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
	return (
		<div
			className={cn(
				"row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
				className
			)}
			style={{
				background: "rgb(0,0,0,0.3)",
				backgroundColor:
					"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(130,0,0,1) 59%, rgba(90,0,0,1) 100%)",
			}}
		>
			<div className={`${id == 6} && flex justify-center h-full`}>
				<div className="w-full h-full absolute top-0 left-0">
					{/* eslint-disable-next-line @next/next/no-img-element */}
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
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				{id === 6 && (
					<BackgroundGradientAnimation>
						<div className=" items-center justify-center text-white font-bold" />
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
						{description}
					</div>
					<div className="font-sans font-bold text-lg mb-2 mt-2 max-w-96 z-10 lg:text-3xl">
						{title}
					</div>
				</div>
			</div>
		</div>
	);
};

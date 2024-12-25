/* eslint-disable @next/next/no-img-element */
import { assetUrl, projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
	return (
		<div className="py-20 w-full" id="projects">
			<h1 className="heading text-center">
				Highlighting <span className="text-cyan-400">Recent Innovations</span>
			</h1>
			<div
				className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-10 gap-y-20 2xl:gap-y-40
			"
			>
				{projects.map(
					({ id, title, des, img, lngIconLts, toolsIconLts, link }) => (
						<div
							key={id}
							className="h-[28rem] sm:h-[25rem] lg:h-[27rem] xl:h-[36rem] flex items-center justify-center w-50vw sm:w-[45vw] lg:w-[39vw] xl:w-[28vw] w-[28vw] my-3 lg:my-4"
						>
							<PinContainer title={link} href={link}>
								<div className="relative flex items-center justify-center sm:w-[27rem] xl:w-[28vw] w-[80vw] overflow-hidden h-[30vh] sm:h-[33vh] my-12">
									<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
										<img
											src={`${assetUrl}/backgrounds/abstract/bg.png`}
											alt="bg-img"
										/>
									</div>
									<img
										src={img}
										alt={title}
										className="z-10 absolute bottom-0 object-contain max-w-full max-h-full border border-white/[0.6]"
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-1">
									{title}
								</h1>

								<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 px-1">
									{des}
								</p>

								<div className="flex items-center justify-between mt-7 mb-3 px-1">
									<div className="flex item-center">
										{lngIconLts.map((icon, index) => (
											<div
												key={icon}
												className="border border-white/[2.0] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
												style={{
													zIndex: 10 - index,
													transform: `translateX(-${4.2 * index * 1.8}px)`,
												}}
											>
												<img src={icon} alt={icon} className="p-2" />
											</div>
										))}
									</div>

									<div className="flex justify-center items-center">
										{/* <FaLocationArrow className="me-2" color="#00a1a1" />
									<p className="flex lg:text-xl md:text-xs text-sm text-cyan-300">
										{" "}
										Visit live site
									</p> */}
										{toolsIconLts.map((icon, index) => (
											<div
												key={icon}
												className="border border-white/[2.0] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
												style={{
													zIndex: 10 - index,
													transform: `translateX(-${4.2 * index * 1.8}px)`,
												}}
											>
												<img src={icon} alt={icon} className="p-2" />
											</div>
										))}
									</div>
								</div>
							</PinContainer>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default RecentProjects;

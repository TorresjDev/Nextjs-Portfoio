/* eslint-disable @next/next/no-img-element */
import { assetUrl, projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
	return (
		<div className="py-20 w-full" id="projects">
			<h1 className="heading text-center">
				Highlighting Recent <span className="text-cyan-400">Innovations</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-10 lg:gap-x-16 gap-y-20 xl:gap-y-10 2xl:gap-y-6">
				{projects.map(
					({ id, title, des, img, lngIconLts, toolsIconLts, link }) => (
						<div
							key={id}
							className="h-[39rem] sm:h-[36rem] lg:h-[24rem] xl:h-[27rem] 2xl:h-[30rem] 3xl:h-[33rem] flex items-center justify-center w-full max-w-[40vw] lg:max-w-[36vw] xl:max-w-[38vw]  my-4 sm:my-14"
						>
							<PinContainer
								title={link}
								href={link}
								className="mx-auto w-full items-center justify-center"
							>
								<div className="w-[80vw] sm:w-[30rem] lg:w-[27rem] xl:w-[36vw] relative flex items-center justify-center overflow-hidden h-[30vh] sm:h-[33vh] my-12">
									<div className="relative w-auto h-full overflow-hidden lg:rounded-3xl items-center justify-between bg-[#13162d]">
										<img
											src={`${assetUrl}/backgrounds/abstract/bg.png`}
											alt="bg-img"
										/>
									</div>
									<img
										src={img}
										alt={title}
										className="z-10 absolute bottom-0 object-contain max-w-full w-auto max-h-full items-center justify-between border border-white/[0.6]"
									/>
								</div>
								<div className="w-full px-4">
									<h1 className="font-bold text-cyan-400 lg:text-2xl md:text-xl text-base line-clamp-1">
										{title}
									</h1>
									<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
										{des}
									</p>
									<div className="flex items-center justify-between mt-7 mb-3">
										<div className="flex items-center ">
											{lngIconLts.map((icon, index) => (
												<div
													key={icon}
													className="border border-white/[2.0] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
													style={{
														zIndex: 13 - index,
														transform: `translateX(-${7.2 * index}px)`,
													}}
												>
													<img src={icon} alt={icon} className="p-2" />
												</div>
											))}
										</div>
										<div className="flex justify-center items-center">
											{toolsIconLts.map((icon, index) => (
												<div
													key={icon}
													className="border border-white/[2.0] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
													style={{
														zIndex: 13 - index,
														transform: `translateX(-${7.2 * index}px)`,
													}}
												>
													<img src={icon} alt={icon} className="p-2" />
												</div>
											))}
										</div>
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

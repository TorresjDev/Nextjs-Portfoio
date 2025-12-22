/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";
import { assetUrl, socialMedia } from "@/data";
import { MdDownload, MdDownloadDone } from "react-icons/md";
import dynamic from "next/dynamic";

// Lazy load Lottie for better performance
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const Footer = () => {
	const [downloaded, setDownloaded] = useState(false);

	const handleDownload = () => {
		setDownloaded(true);
	};

	return (
		<footer className="w-full text-white py-16 px-8 relative">
			<div className="container mx-auto flex flex-col gap-12">
				<div className="absolute inset-0 z-0 ">
					<img
						src={`${assetUrl}/backgrounds/ui/footer-grid.svg`}
						alt="grid"
						className="w-full h-full object-cover opacity-50 "
					/>
				</div>
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-12">
					<div className="text-center md:text-left md:w-1/2">
						<h1 className="text-3xl font-bold text-cyan-400 mb-4">
							Ready to Collaborate?
						</h1>
						<p className="text-sm md:text-base text-gray-300">
							I’m passionate about creating modern, user-friendly digital
							experiences. Let’s connect and explore how I can help bring your
							ideas to life.
						</p>
					</div>
					<div className="flex flex-col items-center md:w-1/2">
						<span
							className={`absolute bottom-[19rem] right-[16rem] z-40 w-44 h-44`}
						>
							<Lottie
								animationData={animationData}
								loop={downloaded}
								autoPlay={downloaded}
							/>
						</span>
						<a
							href="/Jesus_Torres_Resume.pdf"
							download="Jesus_Torres_Resume.pdf"
							className=" pt-3"
						>
							<MagicButton
								title={downloaded ? "Resume Downloaded!" : "Download Resume"}
								icon={downloaded ? <MdDownloadDone /> : <MdDownload />}
								position="left"
								handleClick={handleDownload}
								otherClasses=" hover:text-cyan-400 "
							/>
						</a>
					</div>
				</div>

				{/* Informative Links Section */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 z-10">
					{/* About Me */}
					<div>
						<h2 className="text-lg font-semibold text-cyan-400 mb-4">
							About Me
						</h2>
						<p className="text-sm text-gray-300">
							Hi, I’m Jesus Torres, a developer with a knack for building
							innovative web applications using modern frameworks like Next.js
							and Tailwind CSS.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h2 className="text-lg font-semibold text-cyan-400 mb-4">
							Quick Links
						</h2>
						<ul className="space-y-2 text-sm text-gray-300">
							<li>
								<a href="#about" className="hover:text-cyan-400">
									About Me
								</a>
							</li>
							<li>
								<a href="#projects" className="hover:text-cyan-400">
									My Projects
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-cyan-400">
									Contact Me
								</a>
							</li>
						</ul>
					</div>

					{/* Connect with Me */}
					<div>
						<h2 className="text-lg font-semibold text-cyan-400 mb-4">
							Connect with Me
						</h2>
						<div className="flex gap-4">
							{socialMedia.map((profile) => (
								<a
									key={profile.id}
									href={profile.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 flex items-center justify-center bg-black-300 rounded-lg hover:bg-cyan-400 transition"
								>
									<img
										src={profile.img}
										alt={profile.id.toString()}
										width={20}
										height={20}
									/>
								</a>
							))}
						</div>
					</div>

					{/* Contact */}
					<div>
						<h2 className="text-lg font-semibold text-cyan-400 mb-4">
							Contact
						</h2>
						<ul className="space-y-2 text-sm text-gray-300">
							<li>
								<a
									href="mailto:j.torres3.dev@gmail.com"
									className="hover:text-cyan-400"
								>
									j.torres3.dev@gmail.com
								</a>
							</li>
							<li>Based in Texas, USA</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-gray-400">
						© 2025 Jesus Torres. All Rights Reserved.
					</p>
					<p className="text-sm text-gray-400">
						Powered by <span className="text-cyan-400">Next.js</span> and{" "}
						<span className="text-cyan-400">Tailwind CSS</span>.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

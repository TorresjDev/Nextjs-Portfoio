import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 me:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl ld:text-6xl" words="Transforming concept on text generate effect into seaming less experience." />

          <p className="text-center mb-4 text-sm md:tracking-wider md:text-lg lg:text-2xl ">
      Hello, I&apos;m Jesus Torres, a full-stack developer using Next.js and based in Texas. I specialize in building high-quality websites and applications that are fast, accessible, and responsive. I am passionate about creating digital experiences that are both beautiful and functional. Let&apos;s work together to bring your ideas to life!
          </p>

        </div>
      </div>
		</div>
	)};

export default Hero;

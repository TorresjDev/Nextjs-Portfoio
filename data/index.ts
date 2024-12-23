export const assetUrl = "https://torresjdev.github.io/assets-host/assets";

export const navItems = [
	{ name: "About", link: "#about", iconKey: "FaInfoCircle" },
	{ name: "Projects", link: "#projects", iconKey: "FaBook" },
	// { name: "Testimonials", link: "#testimonials", iconKey: "FaQuoteRight" },
	{ name: "Contact", link: "#contact", iconKey: "FaAddressBook" },
];

export const gridItems = [
	{
		id: 1,
		title: "Strong focus on client collaboration",
		description:
			"Ensuring seamless communication to deliver solutions that meet client needs.",
		className: "lg:col-span-4 md:col-span-7 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-start",
		img: `${assetUrl}/covers/projects/b1.svg`,
		spareImg: "",
	},
	{
		id: 2,
		title: "Adaptable to global time zones",
		description:
			"Working effectively across regions for smooth project execution.",
		className: "lg:col-span-3 md:col-span-4 md:row-span-3",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	// {
	// 	id: 3,
	// 	title: "Modern and versatile tech stack",
	// 	description: "Proficient in these lanuages and frameworks.",
	// 	className: "lg:col-span-2 md:col-span-3 md:row-span-2",
	// 	imgClassName: "",
	// 	titleClassName: "justify-center",
	// 	techStack1: ["JavaScript", "TypeScript", "C#", "Python"],
	// 	techStack2: [".Net", "React.js", "Next.js", "Node.js"],
	// 	img: "",
	// 	spareImg: "",
	// 	objInfo: {},
	// },
	{
		id: 3,
		title: "Current programming languages use",
		description: "",
		className: "lg:col-span-3 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: `${assetUrl}/backgrounds/ui/grid.svg`,
		spareImg: `${assetUrl}/icons/ui/b4.svg`,
	},
	{
		id: 4,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-4 md:col-span-3 sm:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
	{
		id: 5,
		title: "",
		description: "",
		className:
			"2xl:col-span-2 lg:col-span-3 md:col-span-3 md:row-span-2 !bg-transparent !border-none",
		imgClassName:
			"h-full justify-self-center rounded-3xl border border-white/[0.2]",
		titleClassName: "",
		img: "https://github-readme-stats.vercel.app/api/top-langs/?username=TorresjDev&&theme=tokyonight&layout=compact&hide=jupyter+notebook&hide_border=true",
		spareImg: "",
	},
	{
		id: 6,
		title: "",
		description: "",
		className:
			"3xl:col-span-2 2xl:col-span-3 md:col-span-4 md:row-span-2 !bg-transparent !border-none",
		imgClassName:
			"sm:h-full justify-self-center rounded-3xl border border-white/[0.2] h-3/4",
		titleClassName: "",
		img: "https://github-readme-stats.vercel.app/api/wakatime?username=@	@Jtorres&layout=compact&theme=tokyonight&hide_border=true&hide=text,other,binary,tsconfig,markdown,xml,scss,git,git+config,json,YAML",
		spareImg: "",
	},
	{
		id: 7,
		title: "Currently building a JS Animation library",
		description: "The Inside Scoop",
		className:
			"3xl:col-span-3 2xl:col-span-2 lg:col-span-3 md:col-span-7 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: `${assetUrl}/icons/ui/b5.svg`,
		spareImg: `${assetUrl}/backgrounds/ui/grid.svg`,
	},
];

export const projects = [
	{
		id: 1,
		title: "Sound Wave Analysis Project",
		des: "Visualize sound waves, analyze decibel levels, and explore frequency spectrums using Python and Matplotlib.",
		img: `${assetUrl}/covers/projects/sound-wave-analysis-project.png`,
		lngIconLts: [
			`${assetUrl}/icons/tech/py.svg`,
			`${assetUrl}/icons/tech/numpy.svg`,
			`${assetUrl}/icons/tech/matplotlib.svg`,
		],
		toolsIconLts: [
			`${assetUrl}/icons/tech/jupyter.svg`,
			`${assetUrl}/icons/tech/vscode.svg`,
			`${assetUrl}/icons/tech/gitbash.svg`,
			`${assetUrl}/icons/social/github.svg`,
		],
		link: "https://github.com/TorresjDev/Python-Sound-Wave-Analysis",
	},
	{
		id: 2,
		title: "Buff Hotel Management System",
		des: "Manage hotel reservations, room statuses, and user authentication seamlessly using C# and .NET.",
		img: `${assetUrl}/covers/projects/buff-hotel-system.png`,
		lngIconLts: [
			`${assetUrl}/icons/tech/csharp.svg`,
			`${assetUrl}/icons/tech/dotnet.svg`,
			`${assetUrl}/icons/tech/sql.svg`,
		],
		toolsIconLts: [
			`${assetUrl}/icons/tech/mysql.svg`,
			`${assetUrl}/icons/tech/nuget.svg`,
			`${assetUrl}/icons/tech/vscode.svg`,
			`${assetUrl}/icons/tech/gitbash.svg`,
			`${assetUrl}/icons/social/github.svg`,
		],
		link: "https://github.com/TorresjDev/CSharp-Buff-Hotel-Management-System",
	},
	{
		id: 3,
		title: "Phaser 3 Platformer Game",
		des: "A fun platformer game built using Phaser 3, where players collect coins, avoid bombs, and challenge their skills across dynamic game scenes.",
		img: `${assetUrl}/covers/projects/phaser3game.png`,
		lngIconLts: [
			`${assetUrl}/icons/tech/js.svg`,
			`${assetUrl}/icons/tech/html.svg`,
			`${assetUrl}/icons/tech/css.svg`,
			`${assetUrl}/icons/tech/nodejs.svg`,
		],
		toolsIconLts: [
			`${assetUrl}/icons/tech/phaser-planet-web.svg`,
			`${assetUrl}/icons/tech/npm.svg`,
			`${assetUrl}/icons/tech/vscode.svg`,
			`${assetUrl}/icons/tech/gitbash.svg`,
			`${assetUrl}/icons/social/github.svg`,
		],
		link: "https://github.com/TorresjDev/JS-Phaser-Game",
	},
	{
		id: 4,
		title: "Institute to Advance Diversity",
		des: "A mentorship platform aimed at empowering youth through unparalleled mentorship, fostering diversity, and creating impactful connections.",
		img: `${assetUrl}/covers/projects/instadvdiv.png`,
		lngIconLts: [
			`${assetUrl}/icons/tech/react.svg`,
			`${assetUrl}/icons/tech/bootstrap.svg`,
			`${assetUrl}/icons/tech/nodejs.svg`,
			`${assetUrl}/icons/tech/csharp.svg`,
			`${assetUrl}/icons/tech/dotnet.svg`,
			`${assetUrl}/icons/tech/sql.svg`,
		],
		toolsIconLts: [
			`${assetUrl}/icons/tech/postman.svg`,
			`${assetUrl}/icons/tech/ssms.svg`,
			`${assetUrl}/icons/tech/yarn.svg`,
			`${assetUrl}/icons/tech/npm.svg`,
			`${assetUrl}/icons/tech/vscode.svg`,
			`${assetUrl}/icons/tech/vs.svg`,
			`${assetUrl}/icons/tech/gitbash.svg`,
			`${assetUrl}/icons/social/github.svg`,
		],
		link: "https://github.com/TorresjDev/FullStack-AdvDiversity",
	},
	{
		id: 5,
		title: "Rock, Paper, Scissors Game",
		des: "Enjoy the timeless game of Rock, Paper, Scissors with dynamic scoring, quirky moves, and user-friendly gameplay. Built using C# and .NET.",
		img: `${assetUrl}/covers/projects/rock-paper-scissors.png`,
		lngIconLts: [
			`${assetUrl}/icons/tech/csharp.svg`,
			`${assetUrl}/icons/tech/dotnet.svg`,
		],
		toolsIconLts: [
			`${assetUrl}/icons/tech/nuget.svg`,
			`${assetUrl}/icons/tech/vscode.svg`,
			`${assetUrl}/icons/tech/gitbash.svg`,
			`${assetUrl}/icons/social/github.svg`,
		],
		link: "https://github.com/TorresjDev/CSharp-Rock-Paper-Scissors-Game",
	},
];

export const testimonials = [
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
];

export const companies = [
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/app.svg",
		nameImg: "/appName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "stream",
		img: "/s.svg",
		nameImg: "/streamName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "West Texas A&M University - CIDM Programmer & Tutor",
		desc: "Built a ReactJS web app and tutored CIDM programming courses.",
		className: "md:col-span-2",
		thumbnail: "https://www.wtamu.edu/_files/images/_dev/wt-logo-main.webp",
	},
	{
		id: 2,
		title: "Sabio Enterprises Inc - Software Engineer Instructor",
		desc: "Led software programming reviews and mentored developers in JS, React, C#, and SQL.",
		className: "md:col-span-2",
		thumbnail: "https://sabio.la/Images/logos/sabio-logo_Optimized.png",
	},
	{
		id: 3,
		title: "Institute to Advance Diversity - Software Engineer",
		desc: "Built components with ASP.NET and React, optimizing user experience.",
		className: "md:col-span-2",
		thumbnail: `${assetUrl}/icons/social/advdiv.svg`,
	},
	{
		id: 4,
		title: "U.S. Army - Airborne Paratrooper",
		desc: "Led multinational teams in dynamic operations, fostering teamwork.",
		className: "md:col-span-2",
		thumbnail:
			"https://www.goarmy.com/etc.clientlibs/goarmy/clientlibs/clientlib-site/resources/static/icons/logos/army-dark-logo.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: `${assetUrl}/icons/social/github.svg`,
		link: "https://github.com/TorresjDev",
	},
	{
		id: 2,
		img: `${assetUrl}/icons/social/linkedIn.svg`,
		link: "https://www.linkedin.com/in/torresjdev/",
	},
];

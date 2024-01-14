import Image from "next/image";
import { Caprasimo } from "next/font/google";
import Blob1 from "./components/icons/Blob1";
import Blob2 from "./components/icons/Blob2";

const capra = Caprasimo({
	weight: "400",
	subsets: ["latin"],
});

import localFont from "next/font/local";
const mangoFont = localFont({ src: "./../public/font/Mango-Regular.woff2" });
const aristotelica = localFont({
	src: "./../public/font/AristotelicaProText-Extralight.woff2",
});
export default function Home() {
	return (
		<>
			<header className="bg-white w-full h-80 relative overflow-hidden flex justify-center sm:items-center flex-col">
				<section className="text-center flex flex-col sm:gap-3 sm:mb-10 max-w-[500px] ml-5 w-96">
					<span
						className={`${aristotelica.className} uppercase text-black  sm:text-xl sm:w-[400px] text-md tracking-[0.23em] z-30`}
					>
						Welcome To
					</span>
					<h1
						className={`${mangoFont.className} sm:text-6xl text-5xl sm:w-[400px] uppercase text-[#5CE1E6] z-30  `}
					>
						Patitas Mercedinas
					</h1>
				</section>
				<Blob1 className="absolute w-80 -top-64 -left-24 rotate-[36deg] opacity-50"></Blob1>
				<Blob2 className="absolute w-80 -bottom-32 -left-10 rotate-[-171deg] opacity-50" />
				<Image
					src="/perroHeader.png"
					width={370}
					height={500}
					className="absolute right-0 bottom-1 max-sm:w-80 "
					alt="Perro portada"
				/>
			</header>
		</>
	);
}
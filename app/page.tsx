import Image from "next/image";

import Blob1 from "./components/icons/Blob1";
import Blob2 from "./components/icons/Blob2";
import DogTracks from "./components/icons/DogTracks";
import AnimalCard from "./components/AnimalCard";

import localFont from "next/font/local";
const mangoFont = localFont({ src: "./../public/font/Mango-Regular.woff2" });

const aristotelica = localFont({
	src: "./../public/font/AristotelicaProText-Extralight.woff2",
});

export default function Home() {
	return (
		<>
			<header className="bg-white w-full h-80 relative overflow-hidden flex justify-center sm:items-center flex-col items-center ">
				<section className="text-center flex flex-col sm:gap-3 mb-10 max-w-[500px] ml-5 w-96 items-center ">
					<div className="w-10 flex items-center justify-center h-10 bg-[#5CE1E6] fill-white rounded-full sm:mb-2 mb-5">
						<DogTracks className="w-5 rounded-full" />
					</div>
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
				<Blob2 className="absolute w-80 -bottom-32 -right-20  sm:-left-10 rotate-[-171deg] opacity-50" />
				<Image
					src="/perroHeader.png"
					width={370}
					height={500}
					className="absolute right-0 bottom-1 max-sm:w-80 sm:block hidden"
					alt="Perro portada"
				/>
			</header>
			{/* TODO: ARREGLAR LOS TAMAÑOS DE LOS ANIMALITOS */}
			<main className="flex max-w-5xl gap-5 gap-x-8 sm:flex-wrap flex-col sm:flex-row justify-center items-center -mt-5 z-40">
				<AnimalCard
					text="Perros en Adopcion"
					imageSrc="/Dog.webp"
					size="150"
					alt="Black Dog"
					color="bg-[#efad4a]"
				/>

				<AnimalCard
					text="Perros de refugio"
					imageSrc="/Dog2.webp"
					size="150"
					alt="Black dog with white"
					color="bg-[#7cdaf9]"
				/>

				<AnimalCard
					text="Gatos en adopción"
					imageSrc="/cats/cat.webp"
					size="150"
					alt="Brown cat"
					color="bg-[#87bec0]"
				/>

				<AnimalCard
					text="Perros & Gatos Adoptados"
					imageSrc="/cat-dog.webp"
					size="150"
					alt="Brown cat"
					color="bg-[#C982D3]"
				/>
			</main>
		</>
	);
}

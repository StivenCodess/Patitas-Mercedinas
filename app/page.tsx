import Link from "next/link";
import AnimalCard from "./components/AnimalCard";
import HeaderMain from "./components/HeaderMain";

export default function Home() {
	return (
		<>
			<HeaderMain></HeaderMain>
			{/* TODO: ARREGLAR LOS TAMAÑOS DE LOS ANIMALITOS */}
			<main className="flex max-w-5xl gap-5 gap-x-8 flex-1 sm:flex-wrap flex-col content-start sm:flex-row justify-center items-center -mt-5 z-40">
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
				<Link
					href="/donation"
					className="bg-[#12a9e9] px-10 py-3 uppercase rounded-md text-white flex mt-10 justify-center items-center text-2xl gap-2"
				>
					Donar
				</Link>
			</main>
			<footer className="w-full flex justify-center flex-col items-center p-3 ">
				StivenCodess
			</footer>
		</>
	);
}

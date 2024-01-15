import AnimalCard from "./components/AnimalCard";
import Header from "./components/header";

export default function Home() {
	return (
		<>
			<Header></Header>
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
			<footer className=" w-full flex justify-center flex-col items-center mt-20 p-3">
				<button className="bg-[#12a9e9] px-10 py-3 uppercase rounded-md text-white flex justify-center items-center text-2xl gap-2">
					Donar
				</button>
			</footer>
		</>
	);
}

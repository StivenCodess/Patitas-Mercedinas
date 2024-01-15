import Image from "next/image";

const AnimalCard = ({ text, imageSrc, size, alt, color }) => {
	return (
		<article
			className={`${color} bg-gradient-to-b from-black/15 from-30%  flex rounded-xl shadow-2xl max-w-[360px] sm:max-w-md max-h-48 min-h-52`}
		>
			<section className="flex flex-col gap-y-3 w-64 justify-center items-center">
				<h2 className="uppercase font-bold text-3xl text-white text-center tracking-widest">
					{text}
				</h2>
				<button className="rounded-md p-2 w-40 bg-white uppercase shadow-md">
					Ver mas
				</button>
			</section>
			<picture className="relative w-44">
				<Image
					src={imageSrc}
					width={size}
					height={size}
					className="absolute bottom-0"
					alt={alt}
				/>
			</picture>
		</article>
	);
};

export default AnimalCard;

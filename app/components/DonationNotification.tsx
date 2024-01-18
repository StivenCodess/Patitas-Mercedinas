"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const DonationNot = () => {
	const searchParams = useSearchParams();
	const status = searchParams.get("status");
	const [visible, setVisible] = useState(true);

	if (status === "null") return null;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(false);
		}, 5000);
		return () => clearTimeout(timeout);
	}, []);

	/** TODO: ADD FADE OUT ANIMATION */

	return (
		<section className={visible ? "block" : "hidden"}>
			<main className="sm:w-2/6 p-4 sm:absolute sm:bottom-0 sm:right-0 m-10 animate-fade-in-out shadow-2xl bg-white rounded-xl border-[#69413c] border-[2px] ">
				<Image
					src="/prueba1.webp"
					width={100}
					height={100}
					className="absolute -top-[101px] right-4"
					alt="cute-dog"
				/>
				<p className="text-center opacity-90">
					¡Hola! Gracias por tu generosa donación. Tu apoyo va directamente a la
					alimentación y cuidado de nuestros adorables compañeros peludos 🐶. Gracias por
					hacer posible que continuemos cuidando y brindando amor a estos animales ❤️.
				</p>
			</main>
		</section>
	);
};

export default DonationNot;

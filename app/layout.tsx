import type { Metadata } from "next";
import { Onest, Caprasimo } from "next/font/google";
import "./globals.css";

const capra = Caprasimo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Patitas Mercedinas",
	description:
		"Descubre la ternura en cada rincón de Villa Mercedes con Patitas Mercedinas. Encuentra y comparte historias de perritos callejeros en busca de amor y un hogar. Únete a nuestra comunidad dedicada a ayudar a estos peludos amigos a encontrar la felicidad que se merecen. ¡Adopta, comparte y haz la diferencia con Patitas Mercedinas!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={capra.className}>{children}</body>
		</html>
	);
}

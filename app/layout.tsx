import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";

const onest = Concert_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Patitas Mercedinas",
	description:
		"Descubre la ternura en cada rincón de Villa Mercedes con Patitas Mercedinas. Encuentra y comparte historias de perritos callejeros en busca de amor y un hogar. Únete a nuestra comunidad dedicada a ayudar a estos peludos amigos a encontrar la felicidad que se merecen. ¡Adopta, comparte y haz la diferencia con Patitas Mercedinas!",
	icons: {
		icon: ["/icon/favicon.ico?v=4"],
		apple: ["/icon/apple-touch-icon.png?v=4"],
		shortcut: ["/icon/apple-touch-icon.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${onest.className} flex items-center justify-center overflow-auto min-h-screen flex-col sm:overflow-hidden `}
			>
				{children}
			</body>
		</html>
	);
}

import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
import Image from "next/image";

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN as string,
});

export default function Home({
	searchParams,
}: {
	searchParams: { collection_status: string };
}) {
	const donate = async (formData: FormData) => {
		"use server";
		const name = formData.get("name") as string;
		const message = formData.get("message") as string;

		const preference = await new Preference(client).create({
			body: {
				items: [
					{
						id: "donacion",
						title: `name:${name} message: ${message}`,
						quantity: 1,
						unit_price: Number(formData.get("amount")),
					},
				],
				back_urls: {
					success: "http://localhost:3000/donation",
					pending: "http://localhost:3000/donation",
					failure: "http://localhost:3000/donation",
				},
			},
		});

		redirect(preference.sandbox_init_point!);
	};

	return (
		<>
			<main
				className={
					searchParams.collection_status === "approved" ? "sm:block hidden" : "block"
				}
			>
				<form action={donate} className="flex flex-col gap-6">
					<label className="flex flex-col">
						<span>Nombre</span>
						<input
							type="text"
							name="name"
							placeholder="Juan Quiroga"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
						/>
					</label>
					<label className="flex flex-col">
						<span>Cantidad</span>
						<input
							type="text"
							name="amount"
							placeholder="$500"
							className="p-3 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none "
						/>
					</label>
					<label className="flex flex-col">
						<span>Mensaje</span>
						<textarea
							name="message"
							placeholder="Muchas gracias por lo que hacen!"
							className="p-3 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none "
						/>
					</label>

					<button
						type="submit"
						className="bg-green-500 rounded-md py-2 uppercase text-white"
					>
						Donar
					</button>
				</form>
			</main>
			{searchParams.collection_status === "approved" && (
				<div className="sm:w-2/6 p-4 absolute sm:bottom-0 sm:right-0 m-10 animate-fade-up animate-once animate-duration-1000 animate-ease-linear shadow-2xl bg-white rounded-xl border-[#69413c] border-[2px] ">
					<Image
						src="/prueba1.webp"
						width={100}
						height={100}
						className="absolute -top-[101px] right-4"
						alt="cute-dog"
					/>
					<p className="text-center opacity-90">
						¡Hola! Gracias por tu generosa donación. Tu apoyo va directamente a la
						alimentación y cuidado de nuestros adorables compañeros peludos 🐶. Gracias
						por hacer posible que continuemos cuidando y brindando amor a estos animales
						❤️.
					</p>
				</div>
			)}
		</>
	);
}

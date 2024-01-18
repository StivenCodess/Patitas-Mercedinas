import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
import DonationClient from "./page.client";

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN as string,
});

export default function Donation({
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
				auto_return: "approved",
			},
		});

		redirect(preference.init_point!);
	};

	return <DonationClient donate={donate} />;
}

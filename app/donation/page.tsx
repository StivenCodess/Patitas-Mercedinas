import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

import DonationClient from "./page.client";

const URL = process.env.URL as string;

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN as string,
});

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET!);

export default async function Donation({
	searchParams,
}: {
	searchParams: { collection_status: string };
}) {
	const { data } = await supabase.from("donations").select("*");

	const donate = async (formData: FormData) => {
		"use server";
		const name = formData.get("name") as string;
		const message = formData.get("message") as string;

		const preference = await new Preference(client).create({
			body: {
				items: [
					{
						id: "donacion",
						title: message,
						quantity: 1,
						unit_price: Number(formData.get("amount")),
					},
				],
				back_urls: {
					success: `${URL}/donation`,
					failure: `${URL}/donation`,
				},
				auto_return: "approved",
				payer: {
					name: name,
				},
			},
		});

		redirect(preference.init_point!);
	};

	return (
		<main className="flex w-full h-screen justify-center items-center gap-32 ">
			<DonationClient donate={donate} donations={data} />
		</main>
	);
}

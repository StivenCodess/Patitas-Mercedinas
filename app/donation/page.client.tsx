"use client";
import DonationNotification from "../components/DonationNotification";
import DonorTable from "../components/DonorTable";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function DonationClient({
	donate,
	donations,
}: {
	donate: (formData: FormData) => Promise<never>;
}) {
	const [visible, setVisible] = useState(false);
	const searchParams = useSearchParams();
	const status = searchParams.get("status");

	useEffect(() => {
		if (status === "approved") {
			const timeout = setTimeout(() => {
				setVisible(true);
			}, 5000);

			return () => clearTimeout(timeout);
		}
		setVisible(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<section className={visible ? "block" : "sm:block hidden"}>
				<form
					action={donate}
					className="flex flex-col gap-8 border p-8 w-72 rounded-xl border-[#69413c] shadow-xl"
				>
					<label className="flex flex-col gap-1">
						<span className="">Nombre</span>
						<input
							type="text"
							name="name"
							placeholder="Juan Quiroga"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
						/>
					</label>
					<label className="flex flex-col gap-1">
						<span className="">Cantidad</span>
						<input
							type="text"
							name="amount"
							placeholder="$500"
							className="p-3 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none "
						/>
					</label>
					<label className="flex flex-col gap-1">
						<span className="">Mensaje</span>
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
			</section>
			<DonorTable donations={donations}></DonorTable>
			<DonationNotification />
		</>
	);
}

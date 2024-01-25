"use client";

const DonorTable = ({ donations }) => {
	return (
		<table className="table-auto border-2 border-[#69413c] w-2/5 text-center flex flex-col p-5  rounded-xl">
			<thead>
				<tr className=" flex items-center justify-between w-full">
					<th>Nombre</th>
					<th>Mensaje</th>
					<th>Cantidad</th>
				</tr>
			</thead>
			<tbody className="flex flex-col mt-2">
				{donations.map((donation) => {
					return (
						<tr className="flex justify-between" key={donation.id}>
							<td>{donation.name}</td>
							<td>{donation.message}</td>
							<td>
								{donation.amount.toLocaleString("es-AR", {
									style: "currency",
									currency: "ARS",
								})}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default DonorTable;

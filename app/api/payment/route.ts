import { NextRequest, NextResponse } from "next/server";

import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN as string,
});

export async function POST(request: NextRequest) {
    const body = await request.json().then(data => data as {data: {id: string}})
    const payment = await new Payment(client).get({id: body.data.id})

    console.log("BODY -> ",body)
    console.log("PAYMENT -> ",payment)

    return NextResponse.json({success: true})
}


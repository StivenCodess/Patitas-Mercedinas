import { NextRequest, NextResponse } from "next/server";

import { MercadoPagoConfig, Payment } from "mercadopago";
import { createClient } from '@supabase/supabase-js'

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN as string,
});

const supabase = createClient(process.env.SUPABASE_URL! , process.env.SUPABASE_SECRET!)

export async function POST(request: NextRequest) {
    const body = await request.json().then(data => data as {data: {id: string}})
    const payment = await new Payment(client).get({id: body.data.id})

     const donation = {
         id: payment.id,
         name: payment.additional_info?.payer?.first_name,
         amount: payment.transaction_amount,
         message: payment.description
     }

    const supabaseResult = await supabase.from("donations").insert(donation)

    return NextResponse.json({success: true})
}
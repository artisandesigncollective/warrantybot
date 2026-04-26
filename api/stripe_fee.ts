import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  try {
    const { userEmail, productType, manufacturer } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'apple_pay', 'google_pay'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Warranty Enforcement Demand Letter', description: `Magnuson-Moss Act demand for ${manufacturer} ${productType} warranty denial.` },
          unit_amount: 3900, // $39
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/builder?canceled=true`,
      customer_email: userEmail,
      metadata: { service: 'WARRANTY_ENFORCEMENT', manufacturer, productType }
    });
    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: 'Checkout failed.' });
  }
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createStripeSession(req, res) {
  const { items, name, email, mobile, address, person, tourDate, packageName } =
    req.body;

  const transformedItems = items.map((item) => ({
    quantity: person,
    price_data: {
      currency: "BDT",
      unit_amount: +(item.price * 100).toFixed(2),
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cart`,
    metadata: {
      name,
      email,
      mobile,
      address,
      person,
      tourDate,
      packageName,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}

export default createStripeSession;

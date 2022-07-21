const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LFUKGCoLzwrMqAuAJ1eu3pZSToT1N1FT3yqkO8frA8ZmGZaI7ajxjQiKWbTxCIoG4EhtPhW63JeBVGX7z9ePwC100BSCFKuKy');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  let sum = 0;
  for(let a = 0; a<items.length; a++){
    sum += items[a].price * items[a].amount;
  }
  return parseInt(sum*100);
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "mxn",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
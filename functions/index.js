const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { createRenderer } = require("react-dom/test-utils");
const stripe = require("stripe")(
  "sk_test_51HQFi4GpDUTMmqaiMsqdviexEiv6N06mYHTR9fN2CS84cW8xt3zXJgoHGP27j2nlCbXSZ32uLoiKpMzx8ZAHd95n00BC7MHx04"
);

//-API

//-App cnfig

const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API  routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submits currency
    currency: "INR",
  });

  // creation OK

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//- Listen comand

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-48601/us-central1/api

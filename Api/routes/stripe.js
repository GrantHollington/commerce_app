const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY)

router.post("/payment", (request, response) => {
    stripe.charges.create(
    {
        source: request.body.tokenId,
        amount: request.body.amount,
        currency: "usd"
    }, 
    (stripeError, stripeResponse) => {
        if(stripeError) {
            response.status(500).json(stripeError);
        } else {
            response.status(200).json(stripeResponse);
        }
    })
})

module.exports = router;
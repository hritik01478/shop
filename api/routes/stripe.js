const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
const KEY = "sk_test_51LEezGSA005Ylm0eaGiXwCWGDfZSnY0eM03HWkDfUgecnw9FmLbPhdZ54wO0n0kOuOE5uzOTQm57M9LL98Tl1Uyz007i7s6dfW";
const stripe = require("stripe")(KEY);


router.post("/payment", (req, res) => {
    // console.log(KEY);
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeRes, stripeErr) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
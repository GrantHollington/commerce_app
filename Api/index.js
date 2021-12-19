const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe")
const cors = require("cors");

// setup env variables
dotenv.config();

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

mongoose.connect(
    process.env.MONGO_URL
    ).then(() => {
    console.log("db connection successful")
    }).catch((err) => {
        console.log(err)
    });

app.get("/api/test", () => {
    console.log("test is sucessful")
})

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(PORT, HOST, () => {
    console.log("background server is running!");
}); 

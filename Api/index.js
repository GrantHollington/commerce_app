const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

// setup env varialbles
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

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, HOST, () => {
    console.log("background server is running!");
}); 

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")


// register
router.post("/register", async (request, response) => {
    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: CryptoJS.AES.encrypt(
            request.body.password, 
            process.env.PASS_SEC
            ).toString()
    });
    
    try {

        const savedUser = await newUser.save();
        response.status(201).json(savedUser);

    } catch (error) {

        response.status(500).json(error);
    }
});

// Login

router.post("/login", async (request, response) => {
    try {
        const user = await User.findOne({username: request.body.username});
        !user && response.status(401).json("Wrong Credentials")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== request.body.password &&
        response.status(401).json("Wrong Credentials");

        const accesstoken = jwt.sign({
            id: user._id, 
            isAdmin: user.isAdmin 
        },
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        );

        const {password, ...others} = user._doc;

        response.status(200).json({...others, accesstoken});

    } catch (error) {
        response.status(500).json(error)
    }
})


module.exports = router;
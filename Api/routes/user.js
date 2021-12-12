const router = require("express").Router();

router.get("/usertest", (request, response) => {
    response.send("user test was sucessful");
})

router.post("/userposttest", (request, response) => {
    const username = request.body.username;
    response.send(`Your username is ${username}`)
})

module.exports = router;
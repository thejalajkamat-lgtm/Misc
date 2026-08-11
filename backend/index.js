const express = require("express");
const app = express();

const port = 8080;

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    console.log("standard GET response")
    res.send(`You got a GET response. Congratulations ${user}`)
});
app.post("/register", (req, res) => {
    let {user, password} = req.query;
    console.log("standard POST response")
    res.send(`You got a POST response. Congratulations ${user}`)
});
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
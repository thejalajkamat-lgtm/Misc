const express = require("express");
const app = express();
// const cors = require("cors");
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    console.log("standard GET response")
    res.send(`You got a GET response. Congratulations ${user}`)
});
app.post("/register", (req, res) => {
    let {user, password} = req.body;
    console.log(req.body)
    // console.log("Standard Post request")
    res.send(`You got a POST response. Congratulations ${user}`)
});
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
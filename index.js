const express = require("express");
const app = express();
const path = require("path");

const port = 2200;
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:homepage", (req, res) => {

    let { homepage } = req.params;
    res.render("instagram.ejs", { homepage });
});
app.listen(port, () => {
    console.log("server is running on port 2200");

});
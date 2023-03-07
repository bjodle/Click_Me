const express = require("express");
const path = require("path");
const app = express();
const port = "80";


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join("public")));

// GET REQUEST FOR PAGES
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/new", (req, res) => {
    res.render("new");
})

app.get("/logged", (req, res) => {
    res.render("logged");
})

app.listen(port)
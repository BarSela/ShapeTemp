const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { signup, login } = require("../controllers/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  `mongodb+srv://LihiSabag:1234512345@pm-web-api.p22dw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected!");
});

// Set EJS as templating engine
app.set("view engine", "ejs");

// MiddleWare
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// for parsing application to x-www-form-urlencoded
app.use(express.json());

var userEmail = "";
var fullName = "";

app.listen(port, () => {
  console.log("server is up and running");
});

//Routing for the GET request methods
var status = "false";

app.get("/", (req, res) => {
  console.log(userEmail);
  res.render("pages/homePage");
});

app.get("/signUp", (req, res) => {
  var status = "true";
  res.render("pages/signUp", { status: status });
});

app.get("/login", (req, res) => {
  var loginStatus = "true";

  res.render("pages/login", { loginStatus: loginStatus });
});
app.get("/homePage", (req, res) => {
  res.render("pages/homePage");
});

app.post("/log", login);
app.post("/signup", signup);

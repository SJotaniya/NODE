const express = require("express")
const port = 1008

const app = express()

let students = [
	{"id" : "1", "name" : "Saurabh", "subject" : "ReactJS"},
	{"id" : "2", "name" : "Kartik", "subject" : "NodeJS"},
	{"id" : "3", "name" : "Khushal", "subject" : "Bootstrap"}
]

app.set("view engine", "ejs");

app.get("/",(req, res) => {
	res.render("index", {students});
});

app.listen(port, (err) => {
	err ? console.log(err) : console.log("Server Started on Port : " + port);
});
const express = require('express');
const port = 1009;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let students = [
	{ id: "1", name: "Khushal", city: "Ahmedabad" },
	{ id: "2", name: "Ayush", city: "Surat" },
	{ id: "3",	name: "Saurabh", city: "Rajkot" },
    { id: "4", name: "Rutul", city: "Junagadh" }
]

app.get("/", (req, res) => {
    res.render("index", { students });
});

app.post("/addData", (req, res) => {
    req.body.id = String(students.length + 1);
    students.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = students.filter((e) => e.id != req.query.id);
    students = deleteRecord;
    res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
    let singleData = students.find((e) => e.id == req.params.id);
    res.render("edit", { singleData });
})

app.post("/updateData", (req, res)=>{
   students.forEach((e)=>{
     	if(e.id == req.body.id){
     		e.id = req.body.id;
     		e.name = req.body.name;
     		e.city = req.body.city;
     	}
     	else{
     	   e
     	}
     	res.redirect("/");
   }) 
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : " + port);
})
const express = require('express');
const port = 1099;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let books = [
	{ id: "1", book: "The Great Gatsby", auther: "F. Scott Fitzgerald", publish: "1925", price: "1,633"},
    { id: "2", book: "Great Expectation", auther: "Charles Dickens", publish: "1860", price: "142"},
    { id: "3", book: "To Kill a Mockingbird", auther: "Harper Lee", publish: "1960", price: "256"},
    { id: "4", book: "Half Girlfriend", auther: "Chetan Bhagat", publish: "2014", price: "189"},
    { id: "5", book: "The Psychology of Money", auther: "Morgan Housel", publish: "2020", price: "315"}
]

app.get("/", (req, res) => {
    res.render("BookStore", { books });
});

app.post("/addBook", (req, res) => {
    req.body.id = String(books.length + 1);
    books.push(req.body);
    res.redirect("/");
})

app.get("/deleteBook", (req, res) => {
    let deleteRecord = books.filter((e) => e.id != req.query.id);
    books = deleteRecord;
    res.redirect("/");
});

app.get("/editBook/:id", (req, res) => {
    let singleData = books.find((e) => e.id == req.params.id);
    res.render("EditBook", { singleData });
})

app.post("/updateBook", (req, res)=>{
   books.map((e)=>{
     	if(e.id == req.body.id){
     		e.id = req.body.id;
     		e.book = req.body.book;
     		e.auther = req.body.auther;
            e.publish = req.body.publish;
            e.price = req.body.price;
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
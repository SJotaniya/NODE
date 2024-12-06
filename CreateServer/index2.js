const http = "http";
const port = 1010;

const handleServer = (req , res) => {
	res.write("<h1>Welcome live server.</h1>");
	res.end();
}

const server = http.createServer();

server.listen(port, (err) => {
	err ? console.log(err) : console.log("Server created on port : " + port);
})
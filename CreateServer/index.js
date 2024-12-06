const http = require("http");
const port = 1008;

const portHandler = (req, res) => {
  res.write("<h1>Welcome.</h1>");
  res.end();
}

const server = http.createServer(portHandler);

server.listen(port,(err)=>{
  err ? console.log(err) : console.log("Server stared on port ", + port);
});
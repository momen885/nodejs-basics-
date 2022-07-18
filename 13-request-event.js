const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("Welcom")
// })

// Using Event emitter API

const server = http.createServer();
// emits request event
server.on("request", (req, res) => {
  res.end("Welcom");
});

server.listen(5000);

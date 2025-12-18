const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    instance: process.env.HOSTNAME,
    status: "ok",
    time: new Date().toISOString()
  }));
}).listen(PORT, "0.0.0.0");

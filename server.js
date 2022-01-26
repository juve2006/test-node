// Load HTTP module

const http = require("http");

const hostname = "localhost";
const port = 8080;

// create HTTP-server
const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
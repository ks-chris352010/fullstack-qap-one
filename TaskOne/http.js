const http = require('http');

// Makes a local server and displays the message 'Its not you, its-a me, Mario!'
const server = http.createServer((req, res) => {
    // Server type:
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Other server types are text/html and application/json, etc.
    res.end('Its not you, its-a me, Mario! \n');
});

const PORT = 3000;
// Waits for server to open and displays the url.
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
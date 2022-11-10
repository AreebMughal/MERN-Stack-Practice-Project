const http = require('http');
const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end();
});

server.listen(PORT, () => console.log(`Server running on port "${PORT}"`))
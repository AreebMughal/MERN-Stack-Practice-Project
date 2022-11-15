const http = require('http');
const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text, javascript, json');
    // res.setHeader('Content-Type', "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');


    // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    // res.setHeader('Access-Control-Max-Age', 2592000);



    if (req.method == 'POST') {
        console.log('POST')
        var body = ''
        req.on('data', function (data) {
            body += data
            console.log('Partial body: ' + body)
        })
        req.on('end', function () {
            console.log('Body: ' + body)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('post received')
        })
    }
    // console.log(req.url);
    if (req.url == '/') {
        console.log(req.url);
        console.log(req);
        console.log(req.method)
        res.end('');
    }
});

server.listen(PORT, () => console.log(`Server running on port "${PORT}"`));



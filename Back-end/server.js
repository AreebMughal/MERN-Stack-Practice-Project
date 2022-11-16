const http = require('http');
const PORT = process.env.PORT || 9000;

const parser = (data) => JSON.parse(data);


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.method == 'POST') {
        let body = '';

        // console.log('-> ', getBody());
        req.on('data', (data) => {
            body = parser(data);
            console.log(body);
        });

    }

    res.end('Yes ok')
    // if (req.method == 'POST') {
    //     console.log('POST')
    //     var body = ''
    //     req.on('data', function (data) {
    //         body += data
    //         console.log('Partial body: ' + body)
    //     })
    //     req.on('end', function () {
    //         console.log('Body: ' + body)
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end('post received')
    //     })
    // }
    // console.log(req.url);

});

server.listen(PORT, () => console.log(`Server running on port "${PORT}"`));



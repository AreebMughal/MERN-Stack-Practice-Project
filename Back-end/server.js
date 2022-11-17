
const http = require('http');
const PORT = process.env.PORT || 9000;
const routers = require('./src/routers');




function validateAdmin(data) {

}

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // console.log(req.url);
    // console.log(req.method);

    if (req.method == 'POST') {
        routers(req, res);

        // console.log('data ->', body )
        // res.end(JSON.stringify(data));
    }

    // res.end('Yes ok')
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



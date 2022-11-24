const adminRouter = require('./admin.route');
const userRouter = require('./user.route');
const url = require('url');
const querystring = require('querystring');

const parser = (data) => JSON.parse(data);

async function bodyParser(req) {
    let body = {};
    await req.on('data', (data) => {
        body = parser(data);
    });
    return body;
}

function sendToRouterType(req, res, data = null) {
    const splitUrl = req.url.split('/').slice(1, 2);
    // console.log(req.url);
    // console.log(splitUrl);
    if (splitUrl.includes('admin')) {
        adminRouter(req, res, data);
    } else if (splitUrl.includes('user')) {
        userRouter(req, res, data);
    }
}

async function routers(req, res) {
    let data = null;
    let parsed = null;
    let param = null;
    switch (req.method) {

        case 'POST':
            data = await bodyParser(req);
            console.log('data ->', data);
            // res.end(JSON.stringify(data));
            sendToRouterType(req, res, data);
            break;
        case 'GET':
            parsed = url.parse(req.url);
            param = querystring.parse(parsed.query);
            console.log('param ->', param);
            sendToRouterType(req, res, param);
            break;
        case 'PUT':
            data = await bodyParser(req);
            parsed = url.parse(req.url);
            param = querystring.parse(parsed.query);
            // console.log('data ->', data);
            // console.log('param ->', param);
            // res.end(JSON.stringify(data));
            sendToRouterType(req, res, { data, param });
            break;
        default:
            console.log('Request Method is not defined.');
            res.end('Request method is not valid.');
            break;
    }
}

module.exports = routers;
const adminRouter = require('../routers/admin.route');
const userRouter = require('../routers/user.route');

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

    if (splitUrl.includes('admin')) {
        adminRouter(req, res, data);
    } else if (splitUrl.includes('user')) {
        userRouter(req, res, data);
    }
}

async function routers(req, res) {

    switch (req.method) {
        case 'POST':
            const data = await bodyParser(req);
            console.log('data ->', data);
            // res.end(JSON.stringify(data));
            sendToRouterType(req, res, data);
            break;
        case 'GET':
            sendToRouterType(req, res);
            break;
        default:
            console.log('Request Method is not defined.');
            res.end('Request method is not valid.');
            break;
    }
}

module.exports = routers;
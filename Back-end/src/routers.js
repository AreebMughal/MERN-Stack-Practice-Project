const adminRouter = require('../routers/admin.route');

const parser = (data) => JSON.parse(data);

async function bodyParser(req) {
    let body = {};
    await req.on('data', (data) => {
        body = parser(data);
    });
    return body;
}

function sendToRouterType(req, res, data = null) {
    const splitUrl = req.url.split('/');
    if (splitUrl.includes('admin')) {
        adminRouter(req, res, data);
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
        default:
            console.log('Request Method is not defined.');
            res.end('Request method is not valid.');
            break;
    }
}

module.exports = routers;
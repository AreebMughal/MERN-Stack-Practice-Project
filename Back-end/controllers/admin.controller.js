const mongodbClient = require('../src/connection');

class AdminController {
    constructor(req, res, data = null) {
        this.req = req;
        this.res = res;
        this.data = data;
    }

    async login() {
        const result = await mongodbClient.db('tekhqs_practice').collection('admin').findOne({ username: this.data.username });
        if (result) {
            this.res.end(JSON.stringify({
                result
            }))
        } else {
            this.res.end('false');
        }
        // mongodbClient.close();
    }
}


module.exports = AdminController;
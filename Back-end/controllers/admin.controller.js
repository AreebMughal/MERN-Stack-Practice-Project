const { mongodbClient, db } = require('../src/connection');

class AdminController {
    constructor(req, res, data = null) {
        this.req = req;
        this.res = res;
        this.data = data;
    }

    async login() {
        const result = await mongodbClient.db(db).collection('admin').findOne({
            username: this.data.username,
            password: this.data.password
        });
        if (result) {
            this.res.end(JSON.stringify(result.username, result.name))
        } else {
            this.res.end('false');
        }
        // mongodbClient.close();
    }
}


module.exports = AdminController;
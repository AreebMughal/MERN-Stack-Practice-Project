const { mongodbClient, db } = require('../src/connection');


class UserController {
    constructor(req, res) {
        this.mongodbCollection = mongodbClient.db(db).collection('users');
        this.res = res;
        this.req = req;
    }

    endResponse(status, message = '', data = {}) {
        this.res.end(JSON.stringify({
            status: status,
            message: message,
            data: data
        }));
    }

    async login(data) {
        const result = await mongodbClient.db(db).collection('users').findOne({ email: data.email, password: data.password });
        if (result) {
            this.endResponse(true, 'Successfully Login', { ...result, password: null });
        } else {
            this.endResponse(false, 'Invalid username/password');
        }
    }

    async addUser(data) {
        const result = await this.mongodbCollection.findOne({ email: data.email });
        if (result) {
            this.endResponse(false, 'This email is already exist.');
        } else {
            const result = await this.mongodbCollection.insertOne(data);
            if (result) {
                endResponse(true, 'User have been added.')
            } else {
                endResponse(false, 'Some error in db.')
            }
        }
    }

    async postJob(data) {
        console.log(data);
        // const result = await this.mongodbCollection.
    }
}


module.exports = UserController;
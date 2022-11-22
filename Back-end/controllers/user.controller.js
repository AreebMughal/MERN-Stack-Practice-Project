const { ObjectId } = require('mongodb');
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
                this.endResponse(true, 'User have been added.')
            } else {
                this.endResponse(false, 'Some error in db.')
            }
        }
    }

    async postJob(data) {
        const user = data.userDetail;

        const id = new ObjectId(user._id);
        const result = await this.mongodbCollection.updateOne(
            { _id: id },
            { $push: { 'posted_jobs': data.jobData } }
        )
        console.log(result);
        if (result.modifiedCount > 0) {
            this.endResponse(true, 'Your Job has been posted.')
        } else {
            this.endResponse(false, 'Job did not posted due to db issue.');
        }
    }

    async getAllJobs() {
        console.log('sadf');
        const cursor = await this.mongodbCollection.find({}).project({ 'posted_jobs': 1, _id: 0 })
        const lists = await (await cursor.toArray()).flat();
        // const jobLists = lists.map(list => list.posted_jobs).flat();
        const jobLists = []
        if (cursor.bufferedCount > 0) {
            lists.forEach(element => {
                if (element.posted_jobs)
                    jobLists.push(element.posted_jobs)
            });
            this.endResponse(true, 'data has been fetched', jobLists.flat())
        } else {
            this.endResponse(false, 'No posted job found.', jobLists.flat())
        }
    }
}


module.exports = UserController;
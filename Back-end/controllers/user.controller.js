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
        const result = await mongodbClient.db(db).collection('users').findOne({ email: data.email, password: data.password }, { email: 1, type: 1, firtName: 1, lastName: 1 });
        if (result) {
            this.endResponse(true, 'Successfully Login', result);
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
            { $push: { 'posted_jobs': { ...data.jobData, _id: new ObjectId() } } }
        )
        console.log(result);
        if (result.modifiedCount > 0) {
            this.endResponse(true, 'Your Job has been posted.')
        } else {
            this.endResponse(false, 'Job did not posted due to db issue.');
        }
    }

    async getAllJobs() {
        const cursor = await this.mongodbCollection.find({}).project({ 'posted_jobs': 1, _id: 0 })
        const lists = await (await cursor.toArray()).flat();
        // const jobLists = lists.map(list => list.posted_jobs).flat();
        let jobLists = []
        lists.forEach(element => {
            if (element.posted_jobs)
                jobLists.push(element.posted_jobs)
        });
        jobLists = jobLists.flat();
        if (jobLists.length > 0) {
            this.endResponse(true, 'data has been fetched', jobLists)
        } else {
            this.endResponse(false, 'No posted job found.', jobLists)
        }
    }

    async isAlreadyApplied(params) {
        const cursor = await this.mongodbCollection.find(
            {
                _id: new ObjectId(params.userId),
                'applied_jobs': { $elemMatch: { _id: new ObjectId(params.jobId) } }
                // 'applied_jobs': { jobType: 'Part-time' }
            }
        )
        const result = await cursor.toArray();
        if (result.length > 0) {
            this.endResponse(true, 'You have already applied to this job.');
        } else {
            this.endResponse(false);
        }
    }


    async applyJob(data) {
        // console.log('data =>', data);
        const result = await this.mongodbCollection.updateOne(
            { _id: new ObjectId(data._id) },
            {
                $push: {
                    'applied_jobs': { ...data.job, _id: new ObjectId(data.job._id) }
                }
            }
        );
        console.log('asd', result);
        if (result.modifiedCount > 0) {
            this.endResponse(true, 'You have applied to this job.');
        } else {
            this.endResponse(false, 'Error in db');
        }
    }
}


module.exports = UserController;
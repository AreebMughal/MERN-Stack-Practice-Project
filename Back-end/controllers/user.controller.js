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
            this.endResponse(true, 'Successfully Login', {
                ...result, posted_jobs: null, applied_jobs: null
            });
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
        console.log(jobLists);
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

    async employerPostedJobs(params) {
        const result = await this.mongodbCollection.findOne({ _id: new ObjectId(params.userId) });
        console.log(result);
        if (result) {
            this.endResponse(true, 'success', result['posted_jobs']);
        } else {
            this.endResponse(false, 'Failed');
        }
    }

    async employerUpdatePostedJob({ data, param }) {
        const userId = new ObjectId(data.userDetail._id);
        const result = await this.mongodbCollection.updateOne(
            {
                _id: userId,
                "posted_jobs._id": new ObjectId(data.jobData._id)
            },
            {
                "$set": {
                    'posted_jobs.$': { ...data.jobData, _id: new ObjectId(data.jobData._id) }
                }
            }
        );
        if (result.modifiedCount > 0) {
            this.endResponse(true, 'You job detail has been updated.');
        } else {
            this.endResponse(false, 'Error in db');
        }
    }

    async addCompanyData(data) {
        const userId = new ObjectId(data.userId);
        const result = await this.mongodbCollection.updateOne(
            { _id: userId },
            {
                "$set": {
                    'companyDetail': data.companyDetail
                }
            }
        )
        if (result.modifiedCount > 0) {
            this.endResponse(true, 'Company data has been updated to your account.');
        } else {
            this.endResponse(false, 'Error in db');
        }
    }

    async getCompanyData(param) {
        const result = await this.mongodbCollection.findOne({ _id: new ObjectId(param.userId) });
        if (result) {
            this.endResponse(true, 'Success', result.companyDetail ?? null);
        } else {
            this.endResponse(false, 'Error in db');
        }
    }
}


module.exports = UserController;
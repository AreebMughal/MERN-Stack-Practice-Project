const { ObjectId } = require('mongodb');
const { mongodbClient, db } = require('../src/connection');
const mongodbCollection = mongodbClient.db(db).collection('users');

const employerPostedJobs = async (req, res) => {
    const params = req.params;
    const result = await mongodbCollection.findOne({ _id: new ObjectId(params.userId) });
    console.log(result);
    if (result) {
        res.send({ status: true, message: 'success', data: result['posted_jobs'] });
    } else {
        res.send({ status: false, message: 'Failed' });
    }
}

const employerUpdatePostedJob = async (req, res) => {
    const data = req.body;
    const param = req.params;
    const userId = new ObjectId(data.userDetail._id);
    const result = await mongodbCollection.updateOne(
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
        res.send({ status: true, message: 'You job detail has been updated.' });
    } else {
        res.send({ status: false, message: 'Error in db' });
    }
}

const addCompanyData = async (req, res) => {
    const data = req.body;
    const userId = new ObjectId(data.userId);
    const result = await mongodbCollection.updateOne(
        { _id: userId },
        {
            "$set": {
                'companyDetail': data.companyDetail
            }
        }
    )
    if (result.modifiedCount > 0) {
        res.send({ status: true, message: 'Company data has been updated to your account.' });
    } else {
        res.send({ status: false, message: 'Error in db' });
    }
}

const getCompanyData = async (req, res) => {
    const param = req.params;
    const result = await mongodbCollection.findOne({ _id: new ObjectId(param.userId) });
    if (result) {
        res.send({ status: true, message: 'Success', data: result.companyDetail ?? null });
    } else {
        res.send({ status: false, message: 'Error in db' });
    }
}

const postJob = async (req, res) => {
    const data = req.body;
    const user = data.userDetail;

    const id = new ObjectId(user._id);
    const result = await mongodbCollection.updateOne(
        { _id: id },
        { $push: { 'posted_jobs': { ...data.jobData, _id: new ObjectId() } } }
    )
    console.log(result);
    if (result.modifiedCount > 0) {
        res.send({ status: true, message: 'Your Job has been posted.' });
    } else {
        res.send({ status: false, message: 'Job did not posted due to db issue.' });
    }
}

module.exports = {
    employerPostedJobs,
    employerUpdatePostedJob,
    getCompanyData,
    addCompanyData,
    postJob,
};
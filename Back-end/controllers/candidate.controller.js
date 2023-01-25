const { ObjectId } = require('mongodb');
const { mongodbClient, db } = require('../src/connection');
const mongodbCollection = mongodbClient.db(db).collection('users');


const getAllJobs = async (req, res) => {
    const cursor = await mongodbCollection.find({}).project({ 'posted_jobs': 1, _id: 0 })
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
        // endResponse(true, 'data has been fetched', jobLists)
        res.send({
            status: true,
            message: 'data has been fetched',
            data: jobLists
        });
    } else {
        endResponse(false, 'No posted job found.', jobLists)
        res.send({
            status: false,
            message: 'No posted job found.',
            data: jobLists
        });
    }
}

const isAlreadyApplied = async (req, res) => {
    const params = req.params
    const cursor = await mongodbCollection.find(
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


const applyJob = async (req, res) => {
    const data = req.body;
    // console.log('data =>', data);
    const result = await mongodbCollection.updateOne(
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


module.exports = {
    getAllJobs,
    isAlreadyApplied,
    applyJob,
}
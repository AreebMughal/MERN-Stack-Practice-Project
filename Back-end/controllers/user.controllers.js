const { ObjectId } = require('mongodb');
const { mongodbClient, db } = require('../src/connection');
const responseSender = require('../src/responseSender');
const mongodbCollection = mongodbClient.db(db).collection('users');


const login = async (req, res) => {
    const data = req.body;
    const result = await mongodbClient.db(db).collection('users').findOne({ email: data.email, password: data.password });
    let response = {}
    if (result) {
        response = {
            status: true,
            message: 'Successfully Login',
            data: { ...result, posted_jobs: null, applied_jobs: null },
        }
    } else {
        response.message = 'Invalid username/password';
    }
    responseSender(res, response);
}

const addUser = async (req, res) => {
    const data = req.body;
    let response = {};
    const result = await mongodbCollection.findOne({ email: data.email });
    if (result) {
        response.message = 'This email is already exist.';
    } else {
        const result = await this.mongodbCollection.insertOne(data);
        if (result) {
            response = {
                status: true,
                message: 'User have been added.'
            }
        } else {
            response = {
                status: false,
                message: 'There is some error in db.'
            }
        }
    }
    responseSender(res, response);
}

module.exports = {
    login,
    addUser
}

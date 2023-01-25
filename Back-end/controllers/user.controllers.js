const { ObjectId } = require('mongodb');
const { mongodbClient, db } = require('../src/connection');
const responseSender = require('../src/responseSender');
const mongodbCollection = mongodbClient.db(db).collection('users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const data = req.body;
    const { password, ...result } = await mongodbClient.db(db).collection('users').findOne({ email: data.email });

    let response = { status: false, message: 'Invalid username/password' };
    if (result) {
        const isPassValid = await bcrypt.compare(data.password, password);
        if (isPassValid) {
            const token = jwt.sign({
                ...result,
            }, 'secret');
            response = {
                status: true,
                message: 'Successfully Login',
                data: { token, posted_jobs: null, applied_jobs: null },
            }
        }
    }
    responseSender(res, response);
}

const addUser = async (req, res) => {
    const data = req.body;
    // console.log(data);
    let response = { status: false };
    const result = await mongodbCollection.findOne({ email: data.email });
    if (result) {
        response.message = 'This email is already exist.';
    } else {
        const encrptPass = await bcrypt.hash(data.password, 10);
        data.password = encrptPass;
        const result = await mongodbCollection.insertOne(data);
        if (result) {
            response = {
                status: true,
                message: 'User have been added.'
            }
        } else {
            response = {
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

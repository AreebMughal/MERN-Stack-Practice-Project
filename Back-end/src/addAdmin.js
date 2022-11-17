
const mongodbClient = require("./connection");

async function addAdmin(mongodbClient, db = '', collection = '', data = {}) {
    try {
        // mongodbClient.connect();
        const result = await mongodbClient.db("tekhqs_practice").collection("admin").insertOne({
            username: 'admin',
            password: 'admin',
            name: 'Areeb Arshad',
            email: "181400149@gift.edu.pk"
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        mongodbClient.close();
        // console.log('+mongodbClient', mongodbClient);
        console.log('closed');
    }
}

// addAdmin(mongodbClient);
async function find() {
    try {
        // mongodbClient.connect();
        const result = await mongodbClient.db('tekhqs_practice').collection('admin').findOne({ username: 'admin' });
        console.log(result);
    } catch (err) {
        console.log('Error', err);
    } finally {
        // mongodbClient.close();
    }
}

find().catch()
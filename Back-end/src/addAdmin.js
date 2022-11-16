
const client = require("./connection");

async function addAdmin(client, db = '', collection = '', data = {}) {
    try {
        // client.connect();
        const result = await client.db("tekhqs_practice").collection("admin").insertOne({
            username: 'admin',
            password: 'admin',
            name: 'Areeb Arshad',
            email: "181400149@gift.edu.pk"
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
        // console.log('+client', client);
        console.log('closed');
    }
}

addAdmin(client);


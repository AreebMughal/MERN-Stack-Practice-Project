const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Areeb:areeb@cluster0.t79l8nf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(function (err) {
    console.log('Connected successfully to server');
})

module.exports = {
    mongodbClient: client,
    db: 'tekhqs_practice'
};




async function main() {
    const uri = "mongodb+srv://Areeb:areeb@cluster0.t79l8nf.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        return client;
        // Make the appropriate DB calls
        // await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

// const client = main().catch(console.error);

// module.exports = client;

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
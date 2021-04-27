const {MongoClient, ObjectID} = require('mongodb')

const databaseURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'node-db'

MongoClient.connect(databaseURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, result) => {

    if(error){
        return console.log("database connection fail"+error)
    }
    console.log("connection is complete")
    const db = result.db(databaseName)

    const myID = new ObjectID()
    console.log(myID.id.length)
    console.log(myID.getTimestamp())

    db.collection('test').insertOne({
        _id: myID,
        name: 'halil',
        updatedID: myID
    }).then(result => console.log(result.ops))



    // db.collection('products').insertMany([

    //     {name:"elma", category:"meyve", stock: "100"},
    //     {name:"armut", category:"meyve", stock: "100"}

    // ]).then(result => console.log(result.insertedCount, result.ops))



})

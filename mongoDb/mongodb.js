const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const databaseURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'node-db'

MongoClient.connect(databaseURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, result) => {

    if(error){
        return console.log("database connection fail"+error)
    }
    console.log("connection is complete")
    const db = result.db(databaseName)

    db.collection('users').insertOne({

        name: 'halil',
        age: 23,
        isMan: true

    }, (error, result) => {
        if(error){
            console.log("error"+error)
        }else{
            console.log(result.ops, result.insertedCount)
        }
    })

    db.collection('users').insertOne({
        name: 'ali',
        age: 33
    }).then(result => {
        console.log(result.ops, "Promise succesful!" )
    }).catch(err => {
          console.log("Promise error:"+err)
      })

})
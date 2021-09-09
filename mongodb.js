// CRUD create, read, update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


//Destructuring
const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager-api'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ age: 21 }, (error, user) => {
    //     if(error) {
    //         return console.log('Unbale to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 21 }).toArray((error, users) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({ age: 21 }).count((error, count) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60fa277d3b222109d0660e9a")}, (error, task) => {

    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)

    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60fa23f061207908b519bee3")
    // }, {
    //     $inc: {
    //         age: 20
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({ completed: false }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({ age: 21 }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({ description: 'Buy Macbook Air' }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
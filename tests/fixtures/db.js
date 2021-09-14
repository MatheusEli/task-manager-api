const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')
const { ObjectId } = require('mongoose')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Matheus eli',
    email: 'matheuseli@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}


const userTwoId = new mongoose.Types.ObjectId()

const userTwo = {
    _id: userTwoId,
    name: 'Steve Rogers',
    email: 'steverogers@example.com',
    password: 'myhouse099@@',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Study Kubernets',
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Study Moleculerjs',
    completed: true,
    owner: userOneId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Study Javascript ES6',
    completed: true,
    owner: userTwoId
}

const setUpDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    setUpDatabase
}

const supertest = require('supertest')
const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Matheus eli', 
    email: 'matheuseli@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()

    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Matheus eli',
        email: 'matheus@example.com',
        password: 'MyPass777!'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app).post('/users/login').send({
        email: 'jose@hotmail.com',
        password: 'potato'
    }).expect(400)
})
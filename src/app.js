const express = require('express')
const userRouter = require('./routers/user')
const taskUser = require('./routers/task')
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskUser)

module.exports = app

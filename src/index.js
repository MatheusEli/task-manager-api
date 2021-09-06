const express = require('express')
const userRouter = require('./routers/user')
const taskUser = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskUser)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


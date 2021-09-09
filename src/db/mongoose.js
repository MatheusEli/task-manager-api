const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const firstTask = new Task({
//     description: '   Finish Wordpress API Course   '
// })

// firstTask.save().then(() => {
//     console.log(firstTask)
// }).catch((error) => {
//     console.log(error)
// })

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '    Matheus   ',
//     email: '    matheuseli12@GMAIL.com    ',
//     password: '1234567'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// Data Sanitisation allows us to alter the data before saving it
// npm validator -> well tested library for complex validation like emails, creditcard and etc.
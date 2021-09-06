const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post('/tasks/', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// GET /tasks?completed=
// ? ---> query
// GET /tasks?limit=10&skip=0
// limit => you limit the amount of data you wanna show
// skip => the page you are... 0 = first page, 10 = second page, 20 = third page...
router.get('/tasks/', auth, async (req, res) => {

    const match = {}
    const sort = {}

    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')

        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        //const tasks = await Task.find({})
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        //const tasks = await Task.find({ owner: req.user.id })
        res.send(req.user.tasks)
    } catch (e) { 
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {

    try {

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        if (e.name === 'CastError') {
            return res.status(404).send()
        }

        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }


        updates.forEach((update) => task[update] = req.body[update])

        await task.save()

        res.status(201).send(task)

    } catch (e) {

        if (e.name === 'CastError') {
            return res.status(404).send()
        }

        res.status(500).send()
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        if (e.name === 'CastError') {
            return res.status(404).send()
        }

        res.status(500).send()
    }
})

module.exports = router
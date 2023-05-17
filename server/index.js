const express = require('express')
const cors = require('cors')
require('dotenv').config()

const {SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const { getTasks, createTask, updateTask, deleteTask } = require('./controller.js')

app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTask)
app.put('/api/tasks', updateTask)
app.delete('/api/tasks/:id', deleteTask)

app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`))
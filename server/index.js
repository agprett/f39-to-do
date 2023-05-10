const express = require('express')
const cors = require('cors')
require('dotenv').config()

const {SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const { getTasks, createTask } = require('./controller.js')

app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTask)

app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`))
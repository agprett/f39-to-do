const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.listen(5478, () => console.log('Docked at port 5478'))
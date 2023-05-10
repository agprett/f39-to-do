let tasks = [{id: 1, name: 'Take out the trash', priority: 'Medium', status: false}, {id: 2, name: 'Make dinner', priority: 'High', status: false}]

const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
})

let globalId = 3

module.exports = {
  getTasks: (req, res) => {
    sequelize.query('SELECT * FROM tasks;')
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  },

  createTask: (req, res) => {
    let {name, priority} = req.body

    if(!name || !priority) {
      res.status(400).send('New tasks must have a name and a priority!')
    } else {
      let newTask = {
        id: globalId,
        name,
        priority,
        status: false
      }

      tasks.push(newTask)

      res.status(200).send(tasks)

      globalId++
    }
  }
}
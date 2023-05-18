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

module.exports = {
  getTasks: (req, res) => {
    sequelize.query(`SELECT * FROM tasks
    ORDER BY status, 
      CASE priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
      END
    ;`)
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  },

  createTask: (req, res) => {
    let {name, priority} = req.body

    if(!name || !priority) {
      res.status(400).send('New tasks must have a name and a priority!')
    } else {
       sequelize.query(`
        INSERT INTO tasks (name, priority)
        VALUES ('${name}', '${priority}');
       `)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }
  },

  updateTask: (req, res) => {
    let {id, status} = req.body

    sequelize.query(`
      UPDATE tasks
      SET status = ${!status}
      WHERE id = ${id};
    `)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
  },

  deleteTask: (req, res) => {
    let {id} = req.param

    sequelize.query(`
      DELETE FROM tasks
      WHERE id = ${id};
    `)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
  }
}
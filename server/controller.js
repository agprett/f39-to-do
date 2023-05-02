let tasks = [{id: 1, name: 'Take out the trash', priority: 'Medium'}, {id: 2, name: 'Make dinner', priority: 'High'}]

module.exports = {
  getTasks: (req, res) => {
    res.status(200).send(tasks)
  }
}
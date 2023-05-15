let tasksDisplay = document.querySelector('#task-display')
let newTaskForm = document.querySelector('#new-task-form')

const buildTasks = (tasks) => {
  tasksDisplay.innerHTML = ''

  tasks.forEach(task => {
    let taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    taskDiv.innerHTML = `
      <input class="task-completed" type="checkbox"/>
      <p class="task-name">${task.name}</p>
      <p class="task-priority">${task.priority}</p>
      <img
        class='trash-can'
        src='https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-26.png'
        alt='trash'
      />
    `

    tasksDisplay.appendChild(taskDiv)
  });
}

const addTask = (event) => {
  event.preventDefault()

  let taskNameInput = document.getElementById('new-task-name')
  let taskPriorityInput = document.getElementById('new-task-priority')

  let newTask = {
    name: taskNameInput.value,
    priority: taskPriorityInput.value
  }

  axios.post('http://localhost:5478/api/tasks', newTask)
    .then(() => {
      getTasks()

      taskNameInput.value = ''
      taskPriorityInput.value = 'Select Priority'
    })
}

newTaskForm.addEventListener('submit', addTask)

const getTasks = () => {
  axios.get('http://localhost:5478/api/tasks')
    .then(res => {
      buildTasks(res.data)
    })
}

getTasks()
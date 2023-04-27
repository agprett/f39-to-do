let tasks = [{name: 'Take out the trash', priority: 'Medium'}, {name: 'Make dinner', priority: 'High'}]

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

  tasks.push(newTask)

  buildTasks(tasks)
}

newTaskForm.addEventListener('submit', addTask)

buildTasks(tasks)
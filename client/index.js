let tasks = [{name: 'Take out the trash', status: 'Medium'}]

let tasksDisplay = document.querySelector('#task-display')

const buildTasks = (tasks) => {
  tasksDisplay.innerHTML = ''

  tasks.forEach(task => {
    let taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    taskDiv.innerHTML = `
      <input type="checkbox"/>
      <p>${task.name}</p>
      <p>${task.status}</p>
      <img
        class='trash-can'
        src='https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-26.png'
        alt='trash'
      />
    `

    tasksDisplay.appendChild(taskDiv)
  });
}

buildTasks(tasks)
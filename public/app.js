let tasks = [];

function renderTasks() {
  const taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
      <span>${task.text}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskListDiv.appendChild(taskDiv);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering
renderTasks();

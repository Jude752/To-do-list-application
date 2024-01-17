// Array to store tasks
let tasks = [];

// Function to render tasks on the webpage
function renderTasks() {
  // Get the container element where tasks will be displayed
  const taskListDiv = document.getElementById('taskList');

  // Clear the existing content inside the container
  taskListDiv.innerHTML = '';

  // Loop through each task and create a corresponding HTML element
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
      <span>${task.text}</span>
    `;

    // Append the task element to the container
    taskListDiv.appendChild(taskDiv);
  });

  // Check if there are completed tasks to show the "Delete Selected" button
  if (tasks.some(task => task.completed)) {
    // Add a single "Delete Selected" button
    const deleteSelectedButton = document.createElement('button');
    deleteSelectedButton.textContent = 'Delete Selected';
    deleteSelectedButton.onclick = deleteSelectedTasks;

    // Add a class to the button for styling
    deleteSelectedButton.classList.add('deleteButton');
    
    // Append the button to the container
    taskListDiv.appendChild(deleteSelectedButton);
  }
}

// Function to add a new task to the tasks array
function addTask() {
  // Get the input element for the new task
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== '') {
    // Add a new task to the tasks array
    tasks.push({ text: taskText, completed: false });

    // Clear the input field
    taskInput.value = '';

    // Render the updated tasks on the webpage
    renderTasks();
  }
}

// Function to toggle the completion status of a task
function toggleTask(index) {
  // Toggle the 'completed' property of the selected task
  tasks[index].completed = !tasks[index].completed;

  // Render the updated tasks on the webpage
  renderTasks();
}

// Function to delete the selected tasks
function deleteSelectedTasks() {
  // Filter out the completed tasks
  tasks = tasks.filter(task => !task.completed);

  // Render the updated tasks on the webpage
  renderTasks();
}

// Initial rendering of tasks when the page loads
renderTasks();

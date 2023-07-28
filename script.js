// Get references to the input field and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

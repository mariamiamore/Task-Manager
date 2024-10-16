// Task object constructor 
function Task(name) 
{
    this.name = name;
    this.dateAdded = new Date().toLocaleString();
}

// Task Manager object 
const taskManager = 
{
    tasks: [],

// Add a new task
addTask(taskName) 
    {
        const newTask = new Task(taskName);
        this.tasks.push(newTask);
        this.displayTasks();
    },

// Display tasks
displayTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        this.tasks.forEach((task, index) => 
        {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" onchange="toggleTaskCompletion(${index})" ${task.completed ? 'checked' : ''}>
                <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">${task.name} <br> Added on: ${task.dateAdded}</span>
                <br> 
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>`;
            taskList.appendChild(listItem);
        });
    },


// Delete a task
deleteTask(index) 
    {
        this.tasks.splice(index, 1);
        this.displayTasks();
    },

// Edit a task
editTask(index) 
{
    const newTaskName = prompt("Edit the task:", this.tasks[index].name);
    if (newTaskName && newTaskName.trim()) 
    {
        this.tasks[index].name = newTaskName.trim();
        this.displayTasks();
    }
},
}

// Function to handle adding a task
function addTask() 
{
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;
    if (taskName.trim()) 
    {
        taskManager.addTask(taskName);
        taskInput.value = ''; // Clear input field after adding
    } 
    else 
    {
        alert("Please enter a valid task.");
    }
}

// Function to delete a task
function deleteTask(index) 
{
    taskManager.deleteTask(index);
}

// Function to edit a task
function editTask(index)
{
    taskManager.editTask(index);
}

// Function to toggle task completion
function toggleTaskCompletion(index) 
{
    taskManager.tasks[index].completed = !taskManager.tasks[index].completed;
    taskManager.displayTasks();
}
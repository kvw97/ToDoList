// Get references to the relevant HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add an event listener to the "Add" button
addButton.addEventListener("click", addTask);

tasks.forEach(renderTask);
// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    
    if (taskText !== "") {
        const task = {text: taskText, completed: false };
        tasks.push(task);
        saveTasks();
        renderTask(task);
        taskInput.value = "";
    }
}

function renderTask(task) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.text;
    taskItem.classList.toggle("completed", task.completed);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        taskItem.classList.toggle("completed", task.completed);
        saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        const taskIndex = tasks.indexOf(task);
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
            saveTasks();
            taskItem.remove();
        }
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



// Add an event listener to the input field to handle pressing the Enter key
taskInput.addEventListener("keyup", function(event) {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        // Call the addTask function to add a new task
        addTask();
    }
});
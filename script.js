// Get references to the relevant HTML elements
const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const tasks = JSON.parse(localStorage.getItem("tasks")) **

// Add an event listener to the "Add" button
addButton.addEventListener("click", addTask);

tasks.forEach(renderTask)
// Function to add a new task
function addTask() {
    // Get the text entered in the input field
    const taskText = taskInput.value.trim();

    // Check if the input is not empty (trim removes extra spaces)
    if (taskText.trim() !== "") {
        const task = {text: textTask, completed: false };
        tasks.push(task);
        saveTasks();
        renderTask(task);
        taskInput.value = "";
    }
}

function renderTask(task) {
    const taskItem = document.createElement("li");
    taskItem.textContext = task.text;
    taskItem.classList.toggle("completed", task.Completed);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.Completed;
    checkbox.addEventListener("change", () =>{
        task.Completed = checkbox.checked;
        taskItem.classList.toggle("completed", task.Completed);
        saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click",() => {
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
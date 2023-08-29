// Get references to the relevant HTML elements
const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add an event listener to the "Add" button
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    // Get the text entered in the input field
    const taskText = taskInput.value;

    // Check if the input is not empty (trim removes extra spaces)
    if (taskText.trim() !== "") {

        // Create a new list item element for the task
        const taskItem = document.createElement("li");
        
        // Set the task's text content to the input text
        taskItem.textContent = taskText;
        
        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field and focus on it
        taskInput.value = "";
        taskInput.focus();
        
        // Add a click event listener to the task item to remove it when clicked
        taskItem.addEventListener("click", removeTask);
    }
}

// Function to remove a task
function removeTask(event) {
    // Get the clicked task item
    const taskItem = event.target;

    // Remove the clicked task item from its parent (the task list)
    taskItem.parentNode.removeChild(taskItem);
}

// Add an event listener to the input field to handle pressing the Enter key
taskInput.addEventListener("keyup", function(event) {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        // Call the addTask function to add a new task
        addTask();
    }
});
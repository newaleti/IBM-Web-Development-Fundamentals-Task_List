// Constants declared for input button and task
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

// Listener for the Enter key to add new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    creatTask();
  }
});

// The onclick event for the add button
document.querySelector("#push").onclick = function () {
  creatTask();
};

// Function to add new task
function creatTask() {
  if (taskInput.value === "") {
    alert("Please Enter A Task");
  } else {
    // This block creates each task and appends it to the task area div element
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");

    const label = document.createElement("label");
    label.id = "taskname";
    label.innerHTML = `
      <input type="checkbox" onclick="updateTask(this)" id="check-task">
      <p>${taskInput.value}</p>
    `;

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete");
    deleteIcon.innerHTML = `<ion-icon name="trash-bin-outline"></ion-icon>`;
    deleteIcon.onclick = function () {
      taskItem.remove();
      checkOverflow();
    };

    taskItem.appendChild(label);
    taskItem.appendChild(deleteIcon);

    taskSection.appendChild(taskItem);

    // Check if overflow is needed after adding a new task
    checkOverflow();

    // Clear the input field after adding the task
    taskInput.value = "";
  }
}

// Function to update task status
function updateTask(task) {
  const taskItem = task.parentElement.querySelector("p");
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}

// Function to check if overflow is needed and add/remove overflow class
function checkOverflow() {
  taskSection.offsetHeight >= 300
    ? taskSection.classList.add("overflow")
    : taskSection.classList.remove("overflow");
}

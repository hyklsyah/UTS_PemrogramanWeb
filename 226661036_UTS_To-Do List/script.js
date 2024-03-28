function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var taskList = document.getElementById("todoList");
    var newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML =
      '<input type="checkbox" onclick="completeTask(this)">' +
      '<span class="task-text">' +
      taskText +
      "</span>" +
      ' <button class="edit-btn" onclick="editTask(this)">Edit</button>' +
      ' <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>';
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function completeTask(checkbox) {
  var task = checkbox.parentElement;
  task.classList.toggle("completed");
}

function deleteTask(button) {
  var task = button.parentElement;
  task.remove();
}

function editTask(button) {
  var task = button.parentElement;
  var taskText = task.querySelector(".task-text").textContent;
  var newText = prompt("Edit tugas:", taskText);
  if (newText !== null && newText.trim() !== "") {
    task.querySelector(".task-text").textContent = newText.trim();
  }
}

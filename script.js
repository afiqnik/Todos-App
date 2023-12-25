const tasks = [];

function addTask() {
  const task = prompt("Enter a new task:");
  if (task.trim() === "" || task === null) {
    alert("Please enter a task.");
  } else {
    tasks.push(task);
    alert("Task added!");
  }
}

function viewTasks() {
  let taskList = "Task:\n";
  for (const task of tasks) {
    taskList += `- ${task}\n`;
  }
  alert(taskList)
}
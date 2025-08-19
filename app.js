function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") return; // do nothing if empty

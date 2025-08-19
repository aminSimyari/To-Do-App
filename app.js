function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") return; // do nothing if empty

  // create li
  let li = document.createElement("li");
  li.innerHTML = text + " <button onclick='removeTask(this)'>Delete</button>";

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}
function removeTask(btn) {
  btn.parentElement.remove(); // remove the li
}

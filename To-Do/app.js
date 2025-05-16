let inputtext = document.getElementById("in-text");
let todolist = document.getElementById("todo-list");
let addbtn = document.getElementById("add-btn");

addbtn.addEventListener("click", () => {
  let list = document.createElement("li");

  list.innerHTML = `${inputtext.value}`;
  todolist.appendChild(list);

  inputtext.value = " ";
});

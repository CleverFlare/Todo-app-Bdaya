const input = document.querySelector(".todo-creator__input");
const submitBtn = document.querySelector(".todo-creator__submit-button");
const todoList = document.querySelector("#todo-list");
const tabsWrapper = document.querySelector(".todo-tabs");

function todoItem(content) {
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex align-items-center border-0 rounded";
  listItem.setAttribute("id", "todo-list__item");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "form-check-input me-2";
  listItem.appendChild(checkbox);

  const itemContent = document.createElement("p");
  itemContent.textContent = content;
  itemContent.className = "mb-0";
  listItem.appendChild(itemContent);

  const deleteBtnWrapper = document.createElement("div");
  deleteBtnWrapper.className = "flex-fill d-flex justify-content-end";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.className = "btn btn-danger";
  deleteBtnWrapper.appendChild(deleteBtn);

  listItem.appendChild(deleteBtnWrapper);

  function toggleList() {
    const isChecked = listItem.classList.contains("todo-list__active-item");
    if (isChecked) {
      listItem.classList.remove("todo-list__active-item");
      checkbox.checked = false;
    } else {
      listItem.classList.add("todo-list__active-item");
      checkbox.checked = true;
    }
  }
  listItem.addEventListener("click", toggleList);

  function deleteTodoItem() {
    listItem.remove();
  }
  deleteBtn.addEventListener("click", deleteTodoItem);

  return listItem;
}

function submitNewTodo(e) {
  e.preventDefault();
  if (!input.value) return;

  // utility variables
  const content = input.value;

  // creating the todo item
  todoList.appendChild(todoItem(content));

  // dealing with the input after creating the todo item
  input.value = "";
  input.focus();
}
submitBtn.addEventListener("click", submitNewTodo);

function displayAllItems() {
  for (const item of todoList.children)
    item.classList.remove("todo-list__hide-item");
}

function displayActiveItems() {
  for (const item of todoList.children) {
    const isActive = item.classList.contains("todo-list__active-item");
    if (isActive) {
      item.classList.add("todo-list__hide-item");
    } else {
      item.classList.remove("todo-list__hide-item");
    }
  }
}

function displayCompletedItems() {
  for (const item of todoList.children) {
    const isInctive = !item.classList.contains("todo-list__active-item");
    if (isInctive) {
      item.classList.add("todo-list__hide-item");
    } else {
      item.classList.remove("todo-list__hide-item");
    }
  }
}

function toggleTabs(e) {
  for (const item of tabsWrapper.children) {
    item.children[0].classList.remove("active");
  }
  e.target.classList.add("active");

  switch (e.target.textContent) {
    case "Active":
      displayActiveItems();
      break;
    case "All":
      displayAllItems();
      break;
    case "Completed":
      displayCompletedItems();
      break;
    default:
      displayAllItems();
  }
}
tabsWrapper.addEventListener("click", toggleTabs);

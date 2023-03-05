const todoList = document.getElementByDataId("todolist");

todoList.addEventListener("click", handleClickTodo);

function handleClickTodo(e) {
  handleDeleteTodo(e);
  handleCheckTodo(e);
}

function handleCheckTodo(e) {
  const todoItem = e.target.closest("#todo-list__item");
  if (!todoItem) return;

  todoItem.classList.toggle("todo-list__active-item");

  const todoItemChildren = Array.from(todoItem.children);

  todoItemChildren.forEach(toggleCheckbox);

  function toggleCheckbox(child) {
    const isCheckbox = child.classList.contains("form-check-input");
    if (!isCheckbox) return;

    child.checked = !child.checked;
  }
}

function handleDeleteTodo(e) {
  const isDeleteBtn = e.target.classList.contains("todo__delete-button");
  if (!isDeleteBtn) return;

  const todoItem = e.target.closest("#todo-list__item");

  todoItem.remove();
}

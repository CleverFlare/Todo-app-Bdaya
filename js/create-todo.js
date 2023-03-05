const input = document.getElementByDataId("input");

const form = document.getElementByDataId("form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const listItem = createTodoItem(input.value);

  input.value = "";

  todoList.append(listItem);
}

function createTodoItem(content) {
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex align-items-center border-0 rounded";
  listItem.id = "todo-list__item";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "form-check-input me-2";
  listItem.append(checkbox);

  const para = document.createElement("p");
  para.innerText = content;
  para.className = "mb-0";
  listItem.append(para);

  const div = document.createElement("div");
  div.className = "flex-fill d-flex justify-content-md-end";
  listItem.append(div);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger todo__delete-button";
  deleteBtn.innerText = "x";
  div.append(deleteBtn);

  return listItem;
}

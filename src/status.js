const LIST_KEY = 'task.list';
const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];

const save = () => {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
};

const status = (checkbox, task) => {
  if (checkbox.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

const removeLocal = (index) => {
  todoList = todoList.filter((task) => task.index !== index);
  save();
  window.location.reload();
};

export {
  status, todoList, LIST_KEY, removeLocal, save,
};
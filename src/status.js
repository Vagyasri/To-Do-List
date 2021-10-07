const LIST_KEY = 'task.list';
// eslint-disable-next-line import/no-mutable-exports
let todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];

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
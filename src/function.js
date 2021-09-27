const LIST_KEY = 'task.list';
const SELECT_LIST = 'select.list';
const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
const selectList = localStorage.getItem(SELECT_LIST);

const taskComp = (todo, input) => {
  todo.completed = input.checked;
};

const save = () => {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
  localStorage.setItem(SELECT_LIST, selectList);
};
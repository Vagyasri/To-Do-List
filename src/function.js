const LIST_KEY = 'task.list';
const SELECT_LIST = 'select.list';
export const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
export const selectList = localStorage.getItem(SELECT_LIST);

export const taskComp = (todo, input) => {
  todo.completed = input.checked;
};

export const save = () => {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
  localStorage.setItem(SELECT_LIST, selectList);
};
const LIST_KEY = 'task.list';
export const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];

export const taskComp = (todo, input) => {
  todo.completed = input.checked;
};

export const save = () => {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
};
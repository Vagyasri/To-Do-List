export const listKey = 'task.list';
export const todoList = JSON.parse(localStorage.getItem(listKey)) || [];

export const taskComp = (todo, input) => {
  todo.completed = input.checked;
};
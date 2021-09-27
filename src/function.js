const LIST_KEY = 'task.list';
const SELECT_LIST = 'select.list';
const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
export const selectList = localStorage.getItem(SELECT_LIST);


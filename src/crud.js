import { todoList } from './function.js';

export const createList = (task) => (
  {
    index: todoList.length,
    description: task,
    completed: [],
  });

export const deleteList = (e) => {
  const deleteButton = e.target;
  if (deleteButton.classList[1] === 'fa-trash-alt') {
    const itemToDelete = deleteButton.parentElement.parentElement;
    itemToDelete.remove();
  }

  if (deleteButton.classList[0] === 'uncheck') {
    const checkBox = deleteButton.parentElement;
    checkBox.classlist.toggle('completed');
  }
};

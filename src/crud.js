import { todoList, removeLocal } from './status.js';

export const createList = (task) => (
  {
    index: todoList.length,
    description: task,
    completed: false,
  });

export const deleteList = (e) => {
  const deleteButton = e.target;
  if (deleteButton.classList[1] === 'fa-trash-alt') {
    const itemToDelete = deleteButton.parentElement.parentElement;
    removeLocal(itemToDelete);
    itemToDelete.remove();
  }
};
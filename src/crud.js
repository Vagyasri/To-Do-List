import { todoList, removeLocal, save } from './status.js';

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
    save();
  }
};

export const deleteAllDone = () => {
  const completed = document.querySelectorAll('.check');
  completed.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.remove();
    }
  });
  window.location.reload();
};
export const listKey = 'task.list';
export const todoList = JSON.parse(localStorage.getItem(listKey)) || [];

const status = (checkbox, task) => {
  if (checkbox.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

export default status;
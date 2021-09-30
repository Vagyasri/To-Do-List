export const listKey = 'task.list';
export const todoList = JSON.parse(localStorage.getItem(listKey)) || [];

export const taskComp = (todo, input) => {
  todo.completed = input.checked;
};

// export const taskComp = (todo, input) => {
//   if (input.checked) {
//     input.classList.add('comp');
//   } else input.classList.add('uncomp');
// };
import './style.css';
import { todoList, taskComp, save } from './function.js';

const container = document.querySelector('.list-container');
const newList = document.querySelector('.new-data');
const newBar = document.querySelector('.add-bar');

const clear = (element) => {
  while (element.firstChild) element.removeChild(element.firstChild);
};

const render = () => {
  clear(container);
  todoList.forEach((todo) => {
    const div = document.createElement('div');
    const listElement = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const icon = document.createElement('i');

    input.type = 'checkbox';
    input.name = 'name';
    input.value = 'value';
    input.id = 'id';
    input.classList.add('cursor');

    listElement.dataset.listId = todo.index;
    input.checked = todo.completed;

    div.classList.add('listcont-prop');
    listElement.classList.add('list-prop');
    span.classList.add('grow');
    span.innerHTML = `${todo.description}`;
    icon.classList.add('fas');
    icon.classList.add('fa-ellipsis-v');

    listElement.appendChild(input);
    listElement.appendChild(span);
    listElement.appendChild(icon);
    div.appendChild(listElement);
    container.appendChild(div);

    input.addEventListener('change', () => {
      taskComp(todo, input);
      save(todoList);
    });
  });
};

render();

function createList(task) {
  return { index: Date.now().toString(), description: task, completed: [] };
}

newList.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newBar.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newBar.value = null;
  todoList.push(list);
  save();
  render();
});
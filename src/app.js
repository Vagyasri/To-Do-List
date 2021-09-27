import './style.css';
import { todoList, taskComp, save } from './function.js';
import { createList } from './crud.js';

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
    const dlt = document.createElement('i');
    const edit = document.createElement('input');

    input.type = 'checkbox';
    input.name = 'name';
    input.value = 'value';
    input.id = 'id';
    input.classList.add('cursor');

    edit.type = 'text';
    edit.placeholder = `${todo.description}`;
    edit.classList.add('grow');

    listElement.dataset.listId = todo.index;
    input.checked = todo.completed;

    div.classList.add('listcont-prop');
    listElement.classList.add('list-prop');
    span.classList.add('grow');
    span.innerHTML = `${todo.description}`;
    icon.classList.add('fas');
    icon.classList.add('fa-ellipsis-v');
    icon.classList.add('show-more');
    dlt.classList.add('fas');
    dlt.classList.add('fa-trash-alt');

    listElement.appendChild(input);
    listElement.appendChild(span);
    listElement.appendChild(icon);
    div.appendChild(listElement);
    container.appendChild(div);

    input.addEventListener('change', () => {
      taskComp(todo, input);
      save(todoList);
    });

    icon.addEventListener('click', () => {
      icon.replaceWith(dlt);
      span.replaceWith(edit);
    });
  });
};

render();

const saveAndRender = () => {
  save();
  render();
};

newList.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newBar.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newBar.value = null;
  todoList.push(list);
  saveAndRender();
});
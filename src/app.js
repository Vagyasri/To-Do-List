import './style.css';
import { todoList, taskComp, listKey } from './function.js';
import { createList } from './crud.js';

const container = document.querySelector('.list-container');
const newList = document.querySelector('.new-data');
const newBar = document.querySelector('.add-bar');
const refresh = document.querySelector('.fa-sync-alt');

const SELECTED_LIST_ID = 'task.selectedListId';
let selectedListId = localStorage.getItem(SELECTED_LIST_ID);

const clear = (element) => {
  while (element.firstChild) element.removeChild(element.firstChild);
};

const save = () => {
  localStorage.setItem(listKey, JSON.stringify(todoList));
  localStorage.setItem(SELECTED_LIST_ID, selectedListId);
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
    edit.value = `${todo.description}`;
    edit.classList.add('grow');

    listElement.dataset.listId = todo.index;
    input.checked = todo.completed;

    if (todo.index === selectedListId) {
      div.classList.add('active');
    }

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

    // dlt.addEventListener('click', (e) => {
    //   if (e.target.className === 'active') {
    //     dlt.parentNode.remove(dlt);
    //   }
    // });

    // edit.addEventListener('enter', () => {
    //   window.location.reload();
    // });

    function deleteList(e) {
      const deleteButton = e.target;
      if (deleteButton.classList[1] === 'fa-trash-alt') {
        const itemToDelete = deleteButton.parentElement.parentElement;
        itemToDelete.remove();
      }
    }
    container.addEventListener('click', deleteList);
  });
};

refresh.addEventListener('click', () => {
  window.location.reload();
});

render();

const saveAndRender = () => {
  save();
  render();
};

container.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

newList.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newBar.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newBar.value = null;
  todoList.push(list);
  saveAndRender();
});

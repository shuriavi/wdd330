const todos = [];
const todosFragment = document.createDocumentFragment();
const $todosList = document.querySelector('.js-todos-list');
const $formAddButton = document.querySelector('.js-btn-add');
const $formInput = document.querySelector('.js-form-input');
const $formMessage = document.querySelector('.js-alert');
const $FilterBtnCollection = document.querySelectorAll('.js-filter-btn');
let count = 0;

function resetForm() {
  $formInput.value = '';
  $formMessage.innerHTML = '';
  $formMessage.classList.remove('Alert--error');
}

function setTodoStatus(event) {
  const searchId = parseInt(event.target.parentNode.dataset.id);
  const index = todos.findIndex(todo => todo.id === searchId);
  const currentTodo = todos[index]; 
  currentTodo.complete = !currentTodo.complete;
}

function createListItemNode(todo) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const checkboxName = `checkbox-${todo.id}`;
  checkbox.id = checkboxName;
  checkbox.type = 'checkbox';
  checkbox.checked = todo.complete;
  checkbox.onclick = setTodoStatus;
  label.textContent = todo.text;
  label.setAttribute('for', checkboxName);
  listItem.setAttribute('data-id', todo.id);
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  return listItem;
}

function appendFragmentToList(todo, fragment) {
  const todoNode = createListItemNode(todo);
  fragment.appendChild(todoNode);
  $todosList.appendChild(fragment);
}

function addTodo(event) {
  event.preventDefault();
  if (!$formInput.value) {
    throw Error('Please add text in your task :)');
  }
  const todo = {
    id: count++,
    text: $formInput.value,
    complete: false
  };
  todos.push(todo);
  appendFragmentToList(todo, todosFragment);
  resetForm();
  $formInput.focus();
}

function removeAllChildNodesFrom($element) {
  while($element.hasChildNodes()) {
    $element.removeChild($element.lastChild);
  }
}

function filterList(todos, fragment, filterCallback) {
  todos.filter(filterCallback)
    .forEach(filteredTodo => appendFragmentToList(filteredTodo, todosFragment));
}

/* Event Listeners */
$formAddButton.addEventListener('click', (e) => {
  try {
    console.time("js addTodo");
    addTodo(e);
    console.timeEnd("js addTodo");
  } catch(error) {
    $formMessage.classList.add('Alert--error');
    $formMessage.innerHTML = error.message;
  }
});

$FilterBtnCollection.forEach($filterBtn => {
  $filterBtn.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || 'all';
    removeAllChildNodesFrom($todosList);
    switch(filter) {
      case 'completed':
        filterList(todos, todosFragment, (todo) => todo.complete);
        break;
      case 'active':
        filterList(todos, todosFragment, (todo) => !todo.complete);
        break;
      default:
        filterList(todos, todosFragment, (todo) => todo);
    }
  });
});
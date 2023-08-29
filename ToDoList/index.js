const list  = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);

function handleClick() {
    const newTodo = this.previousElementSibling.value.trim();

    if (newTodo) {
        createTodo(newTodo);
        saveToStorage(newTodo);
        this.previousElementSibling.value = "";
    }else {
        alert("Введите данные");
    }
}
// Сохраняем данные в локальной истории
function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];

    localStorage.setItem('tasks', JSON.stringify([...todos, todo]));
}

// создаем добавление
function createTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', removeTodo);

    list.append(li);
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('tasks'));

    if (todos) {
        todos.forEach(todo => createTodo(todo));
    }
}
// удаляем список
function removeTodo() {
    this.removeEventListener('click', removeTodo); // удаляем клик
    this.remove(); // удаляем элемент на который кликали
}


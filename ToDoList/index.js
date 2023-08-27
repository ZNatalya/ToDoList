const list  = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    const newTodo = this.previousElementSibling.value.trim();

    if (newTodo) {
        createTodo(newTodo);
        this.previousElementSibling.value = "";
    }else {
        alert("Введите данные");
    }
}
// создаем добавление
function createTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', removeTodo);

    list.append(li);
}

// удаляем список
function removeTodo() {
    this.removeEventListener('click', removeTodo); // удаляем клик
    this.remove(); // удаляем элемент на который кликали
}
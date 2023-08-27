const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

btn.addEventListener('click', openModal);

// Открывает окно
function openModal() {
    modal.classList.add('open');
    attachModalEvents()
}

// Привязываем события
function attachModalEvents() {
    modal.querySelector('.close').addEventListener('click', closeModal);
// закрытие окна по нажатию на "esc"
    document.addEventListener('keydown', handleEscape);
// закрытие окна по нажатию на задний фон
    modal.addEventListener('click', handleOutside)
}
// закрытие окна по нажатию на "esc"
function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}
// закрытие окна по нажатию на задний фон
function handleOutside(event) {
    const isClickOutside = !!event.target.closest('.modal-content');

    if (!isClickOutside) {
        closeModal();
    }
}

// Закрывает окно
function closeModal() {
    modal.classList.remove('open');
    detachModalEvents();
}

// Отвязываем события
function detachModalEvents() {
    modal.querySelector('.close').removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutside)
}
function openTab(evt, tabName) {
    // Скрыть все вкладки
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
    }

    // Убрать активный класс с кнопок
    tabButtons = document.getElementsByClassName('tab-button');
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Показать выбранную вкладку
    document.getElementById(tabName).classList.add('active');

    // Добавить активный класс на текущую кнопку
    evt.currentTarget.classList.add('active');
}

// Получаем элементы
var modal = document.getElementById('myOrders');
var btn = document.getElementById('openMyOrders');
var span = document.getElementsByClassName('close-my-orders')[0];

// Открыть модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрыть модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Закрыть модальное окно, если пользователь кликает вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Получаем все кнопки с классом accordion-header
var acc = document.getElementsByClassName('accordion-header');

// Перебираем все кнопки и добавляем обработчик событий
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        // Переключаем класс "active" для кнопки
        this.classList.toggle('active');

        // Получаем контент, который соответствует кнопке
        var content = this.nextElementSibling;

        // Если контент открыт, скрыть его, если закрыт — показать
        if (content.style.display === 'flex') {
            content.style.display = 'none';
        } else {
            content.style.display = 'flex';
        }
    });
}

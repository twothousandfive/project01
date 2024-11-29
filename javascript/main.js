// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.height = "50px";
//   } else {
//     document.getElementById("header").style.height = "65px";
//   }
// }
// Определяем элементы интерфейса
const pageBack = document.getElementById("page-back");
const pageTitleName = document.getElementById("page-title-name");

// Проверяем наличие истории переходов
if (document.referrer && new URL(document.referrer).pathname !== window.location.pathname) {
    // Если есть реферер (предыдущая страница), показываем кнопку "назад"
    pageBack.classList.remove("page-back-hidden");

    // Назначаем обработчик для кнопки "назад"
    pageBack.addEventListener("click", () => {
        window.history.back();
    });
} else {
    // Скрываем кнопку "назад" на главной странице
    pageBack.classList.add("page-back-hidden");
}
const pageTitle = document.title;
pageTitleName.textContent = pageTitle; // Устанавливаем текст из тега <title>



const banner = document.querySelector('.banner-2');
const slides = banner.querySelectorAll('div');
let currentIndex = 0;

function scrollToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
        banner.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        banner.scrollTo({
            left: slides[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

setInterval(scrollToNextSlide, 2000);

function discountAll() {
  const discountContainer = document.querySelector('.discount');
  discountContainer.classList.toggle('discount-all');
}

document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 0)
}

// Открытие/закрытие блока
function productInCart() {
    const productIn = document.getElementById('product-in');
    if (productIn) {
        productIn.classList.toggle('product-in-view'); // Переключаем класс
    }
}

// Закрытие блока

function closeProductIn() {
    const productIn = document.getElementById('product-in');
    const withBody = document.getElementById('body');
    if (productIn || withBody) {
        productIn.classList.remove('product-in-view'); // Убираем класс для скрытия
    }
}

// Добавление в корзину (пример действия)
function addToCart() {
    alert('Товар добавлен в корзину!');
}

const audio = document.getElementById("audio");
const playButton = document.getElementById("playAudio");
const playIcon = playButton.querySelector("i");  // Иконка внутри кнопки
const text = "конченный идиот, самый сексуальный мужик в мире, горячая чикса, злодей британец, так себе шутник, пубертатная язва, какой‑то мужик, говнюки, недопонятые гении";
let i = 0;
let typingInterval; // Переменная для интервала печатания текста
const typingElement = document.getElementById("typingText");

// Функция для имитации печатания текста
function typeText() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i); // Добавляем один символ
        i++;
    } else {
        clearInterval(typingInterval); // Останавливаем печатание, когда весь текст напечатан
    }
}

// Обработчик для кнопки Play/Pause
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();  // Воспроизводим аудио
        playIcon.classList.remove("bi-play-fill");
        playIcon.classList.add("bi-pause-fill");
        typingInterval = setInterval(typeText, 400);  // Начинаем печатать текст
    } else {
        audio.pause();  // Ставим аудио на паузу
        playIcon.classList.remove("bi-pause-fill");
        playIcon.classList.add("bi-play-fill");
        clearInterval(typingInterval);  // Останавливаем печатание текста
    }
});

// Событие play для начала печатания текста
audio.addEventListener("play", () => {
    typingInterval = setInterval(typeText, 400);  // Начинаем печатать текст при воспроизведении аудио
});

// Событие pause для остановки печатания текста
audio.addEventListener("pause", () => {
    clearInterval(typingInterval);  // Останавливаем печатание текста, когда аудио ставится на паузу
});
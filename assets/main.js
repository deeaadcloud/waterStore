// maps par

ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [59.934390, 30.334484],
        zoom: 17,
        controls: []
    });

    // Создание метки с квадратной активной областью.
    var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout"></div></div>');

    var squarePlacemark = new ymaps.Placemark(
        [59.934390, 30.334484], {

    }, {
        iconLayout: squareLayout,
        // Описываем фигуру активной области "Прямоугольник".
        iconShape: {
            type: 'Rectangle',
            // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
            coordinates: [
                [-25, -25], [25, 25]
            ]
        }
    }
    );
    map.geoObjects.add(squarePlacemark);

});

// maps par

// swiper par

let swipers = document.querySelectorAll(".swiper1")
swipers.forEach(value => {
    let swiper = new Swiper(value, {
        scrollbar: {
            el: ".swiper-scrollbar"

        },
        init: false,
        lazy: true,
        pagination: {
            el: value.closest('.mySwiper').querySelector(".swiper-pagination"), //инициализируем пагиницию у ДАННОГО слайдера через поиск querySelector()
            clickable: true,
        }

        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     990: {
        //         slidesPerView: 1,
        //     },
        //     991: {
        //         slidesPerView: 3,
        //     },
        // },
        // observer: true,
        // observerParents: true
    });

    swiper.on("slideChange afterInit init", function () {
        let currentSlide = this.activeIndex + 1;
        value.closest('.mySwiper').querySelector('.counter').innerHTML = `
    <span class="counter__current">
    ${currentSlide < 10 ? '' + currentSlide : currentSlide}
    </span>  
    <span class="counter__total">
      /${this.slides.length}
    </span>`;
    });

    swiper.init();
});

var swiper2 = new Swiper(".swiper2", {
    watchSlidesProgress: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: false,
    scrollbar: {
        el: ".swiper-scrollbar"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        465: {
            slidesPerView: 1.5,
        },
        555: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 1.5,
        },
        1200: {
            slidesPerView: 2.5,
        },

    }
}
);

// swiper par

// popup par

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popupSuc = document.querySelector('.popup_suc'); // Окно успешно!
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let openSucButtons = document.querySelector('.send'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let closeSucButton = document.querySelector('.close-popup2'); // Кнопка для скрытия окна
let closeSucButton2 = document.getElementById("close"); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        const body = document.body;
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});
closeSucButton2.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});


openSucButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popupSuc.classList.add('active');
    popup.classList.remove('active');

});
closeSucButton.addEventListener('click', () => {
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active');
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        popupSuc.classList.remove('active');
        const body = document.body;
        body.style.height = '';
        body.style.overflowY = '';
    }
});


// popup par


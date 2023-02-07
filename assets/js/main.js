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


//custom select

const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");

// Listen for each custom option click
Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue.textContent = e.target.textContent;
    // Close select
    elSelectCustom.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
  }
});

//custom select

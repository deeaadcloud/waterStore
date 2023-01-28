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
// var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

// var swiper = new Swiper(".mySwiper", {
//     scrollbar: {
//         el: ".swiper-scrollbar"

//     },
//     pagination: {
//         el: value.closest('.slider__wrapper').querySelector(".swiper-pagination"),
//         clickable: true,
//         // renderBullet: function (index, className) {
//         //   return '<span class="' + className + '"> ' + ((menu[index])+ '/' + menu.length)  + '</span>';
//         // }
//     },

//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false
//     }

// }
// );

let swipers = document.querySelectorAll(".swiper1")
swipers.forEach(value => {
    let swiper = new Swiper(value, {
        scrollbar: {
            el: ".swiper-scrollbar"

        },
        init: false,

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
    slidesPerView: 2.5,
    centeredSlides: true,
    centerInsufficientSlides:false,
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
    }
});

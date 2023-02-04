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
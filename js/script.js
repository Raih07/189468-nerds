function show_modal(event) {
	modal_win.classList.add('open');
	event.preventDefault();
	
	document.onkeydown = function(event) {
        if (event.keyCode == 27) { // escape
			close_modal(modal_win);
        }
      };
}

function close_modal(modal_win) {
	modal_win.classList.remove('open');
}

var modal_win = document.getElementById('modal');
var modal_btn = document.getElementById('modal_close');

modal_btn.addEventListener('click', function() { close_modal(modal_win); } );

var btn_write_us = document.getElementById('btn_write_us');
btn_write_us.addEventListener('click', show_modal);

/*******Карта в подвале*********/

ymaps.ready(init);
var myMap,
	myPlacemar
   function init() {     
       myMap = new ymaps.Map("YMapsID", {
           center: [59.939107, 30.321463],
           zoom: 17,
		controls: []	//убираем все кнопки управления
		
       });
	myMap.behaviors.disable('scrollZoom');	//отключение зума скролом колесика
	//myMap.behaviors.disable('drag');
	
	myMap.controls.add('zoomControl', {
		float: 'none',
		position: {
			top: '100px',
			right: '20px'
		}
	});
					   
	
	myMap.controls.add('geolocationControl');	//геолокация
	myMap.controls.add('fullscreenControl');	//полноэкранный режим
	myMap.controls.add('routeButtonControl', { float: 'right' });
	
	myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
		hintContent: 'NЁRDS',
		balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8' },
		{
		iconLayout: 'default#image',	//изображение без доп текста
		iconImageHref: 'img/marker.png',
		iconImageSize: [231, 190],
		iconImageOffset: [-48, -190]	//смещение картинки
		});
	
	myMap.geoObjects.add(myPlacemark)
   }
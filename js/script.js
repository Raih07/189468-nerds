function show_modal(event) {
	modal_win.classList.add('open');
	event.preventDefault();
}

function close_modal(modal_win) {
	modal_win.classList.remove('open');
}

var modal_win = document.getElementById('modal');
var modal_btn = document.getElementById('modal_close');

modal_btn.addEventListener('click', function() { close_modal(modal_win); } );


var btn_write_us = document.getElementById('btn_write_us');
btn_write_us.addEventListener('click', show_modal);
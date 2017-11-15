function close_modal(modal_win) {
	modal_win.classList.remove('open');
}

var modal_win = document.getElementById('modal');
var modal_btn = document.getElementById('modal_close');

modal_btn.addEventListener("click", close_modal(modal_win));
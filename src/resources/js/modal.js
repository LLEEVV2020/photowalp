modal_btn_open_head.onclick = function(){
	modal_head.classList.add('show');
}
modal_btn_close_head.onclick = function(){
	modal_head.classList.remove('show');
}
overlay_head.onclick = function(){
	modal_head.classList.remove('show');
}

modal_btn_open.onclick = function(){
	modal.classList.add('show');
}
modal_btn_close.onclick = function(){
	modal.classList.remove('show');
}
overlay.onclick = function(){
	modal.classList.remove('show');
}
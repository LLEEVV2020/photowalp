var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		const div = document.getElementsByTagName('div')[0]
		div.addEventListener('wheel', function (event) {
			clearTimeout(t);
			return false;
		});
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
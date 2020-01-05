
window.onload = function() {

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var textarea = document.getElementById('textarea');
	var button = document.getElementById('button-submit');

	var fontSize = 18;

	canvas.width = window.innerWidth/2.;
	canvas.height = window.innerHeight;
	
	context.font = fontSize + 'px monospace';

	button.addEventListener('click', function() {
		render();
	});

	function render () {
		context.fillStyle = 'white';
		context.fillRect(0,0,canvas.width,canvas.height);

		var text = textarea.value;
		var x = 12;
		var y = 24;
		var lines = text.split('\n');
		for (var line = 0; line < lines.length; ++line) {
			context.fillStyle = 'black';
			context.fillText(lines[line], x, y + line * fontSize);
		}
	}

	render();

}
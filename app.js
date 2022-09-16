
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

function drawBoard() {
	const width = canvas.width;
	const height = canvas.height;

	let borderLine = 1;
	let boxRow = 3;
	let box = width / boxRow

	context.lineWidth = borderLine
	context.strokeStyle = '#000000'


	for (let x = 0; x < width; x += box) {
		for(let y = 0; y < height; y += box) {
			context.strokeRect(x, y, box, box)
		}
	}

}


drawBoard()

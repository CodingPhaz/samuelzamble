const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

// Rectangle constructor
class Rectangle {
	static idInc = 0
	id;

	constructor(x, y, width, height, color) {
		this.x = x	
		this.y = y	
		this.width = width
		this.height = height	
		this.color = color
	}

	draw = function () {
		context.strokeStyle = this.color
		context.strokeRect(this.x, this.y, this.width, this.height)
		this.id = ++Rectangle.idInc

		return {
			id : this.id,
			context: context
		}
	}
}

const width = canvas.width
const boardLength = 3;
const boardSize = width / boardLength

// Draw board
for(x = 0; x < width; x += boardSize){
	for(y = 0; y < width; y+= boardSize){
		let rectangle = new Rectangle(x, y, boardSize, boardSize, 'black')
		const draw = rectangle.draw()
		drawMark(draw)
	}
}


function drawMark(draw) {
	addEventListener("click", (e) => {
		console.log(draw)

	})
}

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

function Rectangle (x, y, width, height, color){
	this.x = x	
	this.y = y	
	this.width = width
	this.height = height	
	this.color = color
	let id = 1

	this.draw = function () {
		context.strokeStyle = this.color
		context.strokeRect(this.x, this.y, this.width, this.height)
		id += 1
	} 
}

const width = canvas.width
const boardLength = 3;
const boardSize = width / boardLength

for(x = 0; x < width; x += boardSize){
	for(y = 0; y < width; y+= boardSize){
		let rectangle = new Rectangle(x, y, boardSize, boardSize, 'black')
		rectangle.draw()
		console.log(rectangle.id)
	}
}


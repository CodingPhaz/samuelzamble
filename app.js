const element = document.getElementById('canvas')

function draw(){
    
   const context = element.getContext('2d')
    
    context.strokeStyle = 'black'
    let width = element.width
    const boardLength = 3;
    const boardSize = width / boardLength

    for(x = 0; x < width; x += boardSize){
        for(y = 0; y < width; y+= boardSize){
            context.strokeRect(x, y, boardSize, boardSize)
            
            element.addEventListener('mousemove', (event) => {
                const isPointInStroke = context.isPointInStroke(event.offsetX, event.offsetY)
                context.strokeStyle = isPointInStroke ? 'red' : ''
                console.log(event.offsetX, event.offsetY)
                context.clearRect(x, y, boardSize, boardSize)
            })
        }
    }
}


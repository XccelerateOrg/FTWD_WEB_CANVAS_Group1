class DrawingRectangle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    //use inheritance to take the methods from common
    //register the ctx, $(`#canvas`) is not needed cuz its already targeted in ctx??

onMouseDown(coord,e){
    // this.ctxDraft.fillStyle = drawColor;
    //set the color of the line
    console.log("here");
    this.ctx.fillStyle = canvasSettings.colorFill;
    this.ctxDraft.fillStyle = canvasSettings.colorFill;
    // this.ctx.fillStyle = "#00ff00";
    // this.ctx.fillStyle = "#00ff00";
    this.origX = coord[0];
    this.origY = coord[1];
    //get the starting position of the rect
}


onDragging(coord,e){
    // this.ctxDraft.fillStyle = drawColor;
    //one is enough, no need for two fillstyle

    //whenever a new X,Y is registered, create a new rect
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //clear the old X,Y rect
    this.ctxDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
    //make new rect

    //this function is triggered every (px??) user is dragging
    //the X,Y is constanly updating
}

onMouseMove(){}

onMouseUp(coord){
    //when user mouse up, register the rect to thectx real
    this.ctx.fillStyle = canvasSettings.colorFill;
    //set the color for the ctx real

    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //clear the rect from the draft

    this.ctx.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
}
onMouseLeave(){}
onMouseEnter(){}

}

// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("touchmove", draw, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("mousemove", draw, false);
// canvas.addEventListener("touchend", stop, false);
// canvas.addEventListener("mouseup", stop, false);
// canvas.addEventListener("mouseout", stop, false);
// let draw_Color = "red"
// is_drawing = false
// let restore_array =[];
// let start_background_color = "blue"
// let draw_Width = 10;
// let index = -1;

// function start(event) {
//     is_drawing = true;
//     ctx.beginPath();
//     ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
//     event.preventDefault();
// }

// function draw(event) {
//     if (is_drawing ) {
//         ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
//         ctx.strokeStyle = draw_Color;
//         ctx.lineWidth = draw_Width;
//         ctx.lineCap = "round";
//         ctx.lineJoin = "round";
//         ctx.stroke();
//     }
// }

// function stop(event) {
// if(is_drawing) {
//     ctx.stroke();
//     ctx.closePath();
//     is_drawing = false;
// }
// event.preventDefault();

// if ( event.type != 'mouseout' ){
//     restore_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
//     index += 1;
//     console.log(restore_array);
// }

// }

// $(`#clear-btn`).on('click', function clear_canvas(){
// ctx.fillStyle = start_background_color;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// restore_array = [];
// index = -1;
// })

// function undo_last(){
// if (index <= 0) {
//      function clear_canvas(){
//         ctx.fillStyle = start_background_color;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         restore_array = [];
//         index = -1;
//         }
//         clear_canvas();
// } else {
//     index -= 1;
//     restore_array.pop();
//     ctx.putImageData(restore_array[index],0 ,0);
// }
// }
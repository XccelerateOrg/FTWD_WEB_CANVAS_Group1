class DrawingCircle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    onMouseDown(coord,event){
        // retrieve canvasSettings for later use
        this.ctx.fillStyle = canvasSettings.colorFill;
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctxDraft.fillStyle = canvasSettings.colorFill;
        this.ctxDraft.strokeStyle = canvasSettings.colorStroke;
        this.ctxDraft.lineWidth = canvasSettings.strokeSize;
        this.ctx.beginPath()
        this.origX = coord[0];
        this.origY = coord[1];
        console.log(coord)
    }
    onDragging(coord,event){

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //whenever a new X,Y is registered, clear the old circle
        this.ctxDraft.beginPath();

        //set the color to the reg color
        this.centerX = (this.origX + coord[0])/2;
        this.centerY = (this.origY + coord[1])/2;
        //the center of the circle is the starting point + current coord /2 

        //using an if statement to make sure the radius is always > 0
        if(coord[0]-this.centerX >= 0){
            //when the mouse is of the right side of the starting point
            let radius = (coord[0] - this.centerX)
            //the radius is curr coord - the center
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        } else {
            //when the mouse is on the left side of the starting point
            let radius = (this.centerX - coord[0])
            //the radius is the center - curr coord
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        }
        
        // set contextDraft fill and stroke
        this.ctxDraft.fill();
        this.ctxDraft.stroke();
        //make new circle
        
        //this function is triggered every (px??) user is dragging
        //the X,Y is constanly updating
    }
    onMouseMove(){}
    onMouseUp(coord){
        //when user mouse up, register the circle to the ctx real
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //clear the rect from the draft
        this.ctx.beginPath()

        //same method used to draw circle as above
        // if(coord[0]-this.centerX >= 0){
        // this.ctx.arc(this.centerX, this.centerY, (coord[0] - this.centerX), 0, 2*Math.PI)
        // } else {
        // this.ctx.arc(this.centerX, this.centerY, (this.centerX - coord[0]), 0, 2*Math.PI)
        // }

        if(coord[0]-this.centerX >= 0){
            //when the mouse is of the right side of the starting point
            let radius = (coord[0] - this.centerX)
            //the radius is curr coord - the center
            this.ctx.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        } else {
            //when the mouse is on the left side of the starting point
            let radius = (this.centerX - coord[0])
            //the radius is the center - curr coord
            this.ctx.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        }

        // set contextReal fill and stroke
        this.ctx.fill();
        this.ctx.stroke();

        // push to restoreArray for undo / redo
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    onMouseLeave(){}
    onMouseEnter(){}

}

console.log(`a`)

class DrawingRectangle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    //use inheritance to take the methods from common
    //register the ctx, $(`#canvas`) is not needed cuz its already targeted in ctx??

onMouseDown(coord,event){
    this.ctxDraft.fillStyle = drawColor;
    //set the color of the line

    this.origX = coord[0];
    this.origY = coord[1];
    //get the starting position of the rect
}


onDragging(coord,event){
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
    this.ctx.fillStyle = drawColor
    //set the color for the ctx real

    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //clear the rect from the draft

    this.ctx.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
}
onMouseLeave(){}
onMouseEnter(){}

}
class DrawingCurve extends PaintFunction{
    constructor(ctx,ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    
    onMouseDown(coord, e){
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, e){
        this.ctxDraft.beginPath();
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.moveTo(this.origX, this.origY);
        this.ctxDraft.lineTo(coord[0],coord[1]);
        this.ctxDraft.stroke();
    }

    onMouseUp(coord, e){
        this.ctx.beginPath();
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctx.moveTo(this.origX, this.origY);
        this.ctx.quadraticCurveTo((this.origX+coord[0]/2), (this.origY+coord[1])/2, coord[0], coord[1]);
        this.ctx.stroke();
    }
    
    

    drawCurve(ctx, start, cp1, end){
            ctx.setLineDash([]);
            // make line dash if needed
            ctx.strokeStyle = `black`;
            //make it black, fillStyle?
            ctx.beginPath();
            ctx.moveTo(start[0], start[1]);
            // console.log(`Curve - starting x:` + start[0]);
            // console.log(`Curve - starting y:` + start[1]);
            ctx.quadraticCurveTo(cp1[0], cp1[1], end[0], end[1]);
            //cp is most important in curve, determine how and howmuch the line is curved, 
            //the curve point maybe not in contact with the line but it will drag the line away to that direction
            // console.log(`Control point x:` + cp1[0]);
            // console.log(`Control point y:` + cp1[1]);
            // console.log(`Curve - End x:` + end[0]);
            // console.log(`Curve - End y:` + end[1]);
            
            ctx.stroke();
            
        }
}
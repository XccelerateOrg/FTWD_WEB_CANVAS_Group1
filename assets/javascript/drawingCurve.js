    // this.ctx.beginPath();
    // this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.ctx.moveTo(this.origX, this.origY);
    // this.ctx.bezierCurveTo(this.cpX, this.cpY, this.cpX1, this.cpY1, this.endX, this.endY);
    // this.ctx.stroke();

    class DrawingCurve extends PaintFunction{
        constructor(ctx,ctxDraft){
            super();
            this.ctx = ctx;
            this.ctxDraft = ctxDraft;
            this.click = 0;
        }
        
        onMouseDown(coord, e){
            
            if(this.click == 0){
                this.origX = coord[0];
                this.origY = coord[1];
                this.click ++
            console.log(this.click)
    
            } else if (this.click == 1){
                this.endX = coord[0];
                this.endY = coord[1];
                this.click++
            console.log(this.click)
    
            } else if(this.click == 2){
                this.cpX = coord[0];
                this.cpY = coord[1];
                this.click++
            console.log(this.click)
                
    
            } else if(this.click == 3){
                this.cpX1 = coord[0];
                this.cpY1 = coord[1];
                currentFunction = new DrawingCurve (ctx,ctxDraft)
            }
            
            this.ctx.beginPath();
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.ctx.moveTo(this.origX, this.origY);
            this.ctx.bezierCurveTo(this.cpX, this.cpY, this.cpX1, this.cpY1, this.endX, this.endY);
            this.ctx.stroke();
            
        }
    
        onMouseMove(){
            
        }
            
        }
        
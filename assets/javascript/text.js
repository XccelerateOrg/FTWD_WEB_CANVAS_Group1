class DrawingText extends PaintFunction{
    constructor(ctx,ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
        this.textX = [];
        this.textY = [];
    }
    
    onMouseDown(coord,event){
        console.log(canvasSettings.fontWeight)
        this.ctx.font = `${canvasSettings.fontStyle} ${canvasSettings.fontWeight} ${canvasSettings.textSize}px ${canvasSettings.textFont}`;
        console.log(this.ctx.font)
        this.ctx.fillStyle = canvasSettings.colorStroke;

        this.textX.push(coord[0]);
        this.textY.push(coord[1]);

        this.fontStartY = this.textY[0] - this.fontSize;
        $('#textInput').css({"display":"block","transform":"translateY("+coord[1]+"px) translateX("+coord[0]+"px)","font-size":canvasSettings.textSize+"px","color":canvasSettings.colorStroke,"font-family":canvasSettings.textFont,"font-weight":canvasSettings.fontWeight, "font-style":canvasSettings.fontStyle,"padding":"0"});

        if ((this.textX.length > 1) && (event.target.id != $('#textInput'))){
            this.outputText(this.ctx);
        }
    }
    outputText(ctx, ctxDraft){
        let inputText = $('#textInput').val();
        // ctx.font = `${canvasSettings.textSize}px ${canvasSettings.textFont}`;
        ctx.font = `${canvasSettings.fontStyle} ${canvasSettings.fontWeight} ${canvasSettings.textSize}px ${canvasSettings.textFont}`;
        console.log(ctx.font)
        ctx.fillText(inputText,this.textX[0],this.textY[0]);
        $('#textInput').css({"display":"none","transform":"translateY(0) translateX(0)"});
        $('#textInput').val('');
        this.textX= [];
        this.textY = [];
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}
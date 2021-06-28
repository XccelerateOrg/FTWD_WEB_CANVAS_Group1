class DrawingText extends PaintFunction{
    constructor(ctx,ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
        this.fontWeight = 600; //font weight
        this.fontSize = 35; //font size
        this.fontStyle = "Arial"; //font-family
        this.fillStyle = "orange"; //font color
        this.textX = [];
        this.textY = [];
    }
    
    onMouseDown(coord,event){
        //Set up ctx text properties
        this.ctx.font = `${this.fontWeight} ${canvasSettings.textSize}px ${canvasSettings.textFont}`;
        this.ctx.fillStyle = canvasSettings.colorStroke;
        //Store the text starting (x,y)
        this.textX.push(coord[0]);
        this.textY.push(coord[1]);
        //Make the input box appear on the clicked area
        this.fontStartY = this.textY[0] - this.fontSize;
        $('#textInput').css({"display":"block","transform":"translateY("+coord[1]+"px) translateX("+coord[0]+"px)","font-size":canvasSettings.textSize+"px","color":canvasSettings.colorStroke,"font-family":canvasSettings.textFont,"font-weight":this.fontWeight,"padding":"0"});
        //If user click outside the input box, text will be printed on the canvas real
        if ((this.textX.length > 1) && (event.target.id != $('#textInput'))){
            this.outputText(this.ctx);
        }
    }
    //Print the text on the canvas real
    outputText(ctx){
        let inputText = $('#textInput').val();
        ctx.font = `${canvasSettings.textSize}px ${canvasSettings.textFont}`
        ctx.fillText(inputText,this.textX[0],this.textY[0]);
        $('#textInput').css({"display":"none","transform":"translateY(0) translateX(0)"});
        $('#textInput').val('');
        //$('body').find('input[type=text],input').val('');
        this.textX= [];
        this.textY = [];
    }
}
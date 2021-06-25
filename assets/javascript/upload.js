
function uploadImage(){
    $('#import').trigger('click');
    $('#import').change(function(){
        console.log(`change import`)
        var uploadImg = new Image();
        uploadImg.onload = function(){
            ctxDraft.drawImage(uploadImg,200,100);
            currentFunction = new OpenFile(ctx,ctxDraft,uploadImg);
        }
        uploadImg.src = URL.createObjectURL(this.files[0]);
    });
};


// class OpenFile extends PaintFunction{
//     constructor(ctxReal,ctxDraft,img){
//         super();
//         this.ctx = ctxReal;
//         this.ctxDraft = ctxDraft;
//         this.actionCount = 0;
//         this.image = img;
//         this.imageHalfWidth = img.width/2;
//         this.imageHalfHeight = img.height/2;
//         this.actionCount = 0;
//     }
//     onMouseMove(coord){
//         if (this.actionCount === 0){
//             console.log('Image width '+this.image.width);
//             console.log('Image height '+this.image.height);
//             this.ctxDraft.lineWidth = 5;
//             this.ctxDraft.setLineDash([5,5]);
//             this.ctxDraft.strokeStyle = "rgb(0,192,255)";
//             this.ctxDraft.strokeRect(200,100,this.imageHalfWidth*2,this.imageHalfHeight*2);
//         }
//     }
//     onMouseDown(coord){
//         this.actionCount = 1;
//         dragging = true;
//         this.ctxDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.ctxDraft.drawImage(this.image,coord[0]-this.imageHalfWidth,coord[1]-this.imageHalfHeight);
//     }
//     onDragging(coord){
//         this.ctxDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.ctxDraft.drawImage(this.image,coord[0]-this.imageHalfWidth,coord[1]-this.imageHalfHeight);
//     }
//     onMouseUp(coord){
//         this.ctxDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.ctx.drawImage(this.image,coord[0]-this.imageHalfWidth,coord[1]-this.imageHalfHeight);
//         $('#import').val('');
//         this.onFinish();
//         $(".active").trigger("click");
//     }
    // onFinish(){
    //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
    //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
    //     canvasSettings.undoObject.actionCount++;
    // }
// }

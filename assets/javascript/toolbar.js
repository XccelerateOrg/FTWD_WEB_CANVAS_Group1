$('#rect-btn').click(()=>{
    currentFunction = new DrawingRectangle(ctx,ctxDraft);
    console.log(`rect`)
});
$('#drawing-line').click(()=>{
    currentFunction = new DrawingLine(ctx,ctxDraft);
});
$('#circle-btn').on(`click`, function (){
    currentFunction = new DrawingCircle(ctx,ctxDraft);
    console.log(`cir`, currentFunction)
});
$('#text').click(()=>{
    currentFunction = new InsertText(ctx,ctxDraft);
});
$('#save').click(()=>{
    currentFunction = new InsertText(ctx,ctxDraft);
});
// currentFunction = new DrawingRectangle(ctx,ctxDraft);
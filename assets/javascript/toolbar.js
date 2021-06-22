$('#rect-btn').on(`click`, function (){
    currentFunction = new DrawingRectangle(ctx,ctxDraft);
    console.log(`rect`)
});
$('#drawing-line').on(`click`, function (){
    currentFunction = new DrawingLine(ctx,ctxDraft);
});
$('#circle-btn').on(`click`, function (){
    currentFunction = new DrawingCircle(ctx,ctxDraft);
    console.log(`cir`, currentFunction)
});
$('#text').on(`click`, function (){
    currentFunction = new InsertText(ctx,ctxDraft);
});
$('#save').on(`click`, function (){
    currentFunction = new InsertText(ctx,ctxDraft);
});
currentFunction = new DrawingRectangle(ctx,ctxDraft);
// Upload
$('#upload-btn').click(()=>{
    uploadImage();
    console.log(`Upload Image`)
})

// Clear
$('#clear-btn').click(()=>{
    clear();
    console.log(`Cleared`)
});

// Drawing Arc
$('#arc-btn').click(()=>{
    currentFunction = new DrawingArc(ctx,ctxDraft);
    console.log(`Drawing Arc: ${currentFunction}`)
});

// Drawing smoothBrush
$('#smoothBrush').click(()=>{
    currentFunction = new smoothBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#shadowBrush').click(()=>{
    currentFunction = new shadowBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#radialBrush').click(()=>{
    currentFunction = new smoothBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#penBrush').click(()=>{
    currentFunction = new smoothBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#multipleLineBrush').click(()=>{
    currentFunction = new smoothBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

// Drawing Circle
$('#circle-btn').click(()=>{
    currentFunction = new DrawingCircle(ctx,ctxDraft);
    console.log(`Drawing Circle: ${currentFunction}`)
});

// Drawing Curve
$('#curve-btn').click(()=>{
    currentFunction = new DrawingCurve(ctx,ctxDraft);
    console.log(`Drawing Curve: ${currentFunction}`)
});

// Drawing Line
$('#line-btn').click(()=>{
    currentFunction = new DrawingLine(ctx,ctxDraft);
    console.log(`Drawing Line: ${currentFunction}`)
});

// Drawing Polygon
$('#polygon-btn').click(()=>{
    currentFunction = new DrawingPolygon(ctx,ctxDraft);
    console.log(`Drawing Polygon: ${currentFunction}`)
});

// Drawing Rectangle
$('#rectangle-btn').click(()=>{
    currentFunction = new DrawingRectangle(ctx,ctxDraft);
    console.log(`Drawing Rectangle: ${currentFunction}`)
});

// Dragger
$('#drag-btn').click(()=>{
    MouseTouchTracker()
    console.log(`Drawing Rectangle: ${currentFunction}`)
});

// Eraser
$('#eraser-btn').click(()=>{
    currentFunction = new DrawingEraser(ctx);
    console.log(`Eraser: ${currentFunction}`)
});

// Export
$('#export-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Export: ${currentFunction}`)
});

//Fill
$("#fill-btn").click((e) => {
    console.log(`click`);
    var fillIdx = 0;
    const fillColors = [0xFFFF0000,0xFFFFFF00,0xFF00FF00,0xFF00FFFF,0xFF0000FF,0xFFFF00FF];
    console.log(0xFF0000FF)
    currentFunction = new Fill(ctx, ctxDraft)
    // floodFill(x, y, fillColors[fillIdx++ % fillColors.length]);
  });

// Filter
$('#filter-btn').click(()=>{
    // currentFunction = new filterBlur(ctx,ctxDraft);
    filter()
    console.log(`Filter: ${currentFunction}`)
});

// Select
$('#select-btn').click(()=>{
    currentFunction = new Select(ctx,ctxDraft);
    console.log(`Select: ${currentFunction}`)
});

//crop
$('#select-btn').click(()=>{
    currentFunction = new Select(ctx,ctxDraft);
    console.log(`Select: ${currentFunction}`)
});

// Text
$('#text-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Text: ${currentFunction}`)
});

// Undo
$('#undo-btn').click(()=>{
    undo();
    console.log(`undo`)
});

function KeyPress(e) {
    var evtobj = window.event ? event : e
    console.log(evtobj.key)
    //Do action on CTRL + Z
    if (evtobj.keyCode == 90 && evtobj.ctrlKey || evtobj.keyCode == 90 && evtobj.metaKey && evtobj.shiftKey == false) {
        undo()
        console.log("Ctrl + Z Pressed");
    }
    if (evtobj.key == "y" && evtobj.ctrlKey || evtobj.keyCode == 90 && evtobj.shiftKey && evtobj.metaKey) {
        redo()
        console.log("Ctrl + shift + Z Pressed");
    }

}
document.onkeydown = KeyPress;
// Redo
$(`#redo-btn`).click(()=>{
    redo();
    console.log(`redo`)
})

// Zoom
$('#zoom-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Zoom: ${currentFunction}`)
});


$(`#firebase`).click(()=>{

    server();
    console.log(`server`)
})

currentFunction = new DrawingRectangle (ctx,ctxDraft)

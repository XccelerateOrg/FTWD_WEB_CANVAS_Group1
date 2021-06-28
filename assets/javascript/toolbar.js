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
    currentFunction = new radialBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#penBrush').click(()=>{
    alert('To be deployed later')
    // currentFunction = new penBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

$('#multipleLineBrush').click(()=>{
    alert('To be deployed later')
    // currentFunction = new multipleLineBrush(ctx,ctxDraft);
    console.log(`Drawing Brush: ${currentFunction}`)
});

// Drawing Circle
$('#circle-btn').click(()=>{
    currentFunction = new DrawingCircle (ctx,ctxDraft);
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

// Export PNG
$('#export-btnPNG').click(()=>{
    downloadPNG()
    console.log(`Export: ${currentFunction}`)
});

// Export JPG
$('#export-btnJPG').click(()=>{
    downloadJPG()
    console.log(`Export: ${currentFunction}`)
});

//Fill
$("#fill-btn").click((e) => {
    currentFunction = new Fill(ctx, ctxDraft)
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
    currentFunction = new DrawingText(ctx, ctxDraft);
    console.log(`Text: ${currentFunction}`)
});

// Undo
$('#undo-btn').click(()=>{
    undo();
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

$(`#heart-btn`).click(()=>{

    currentFunction = new StampHeart(ctx)
    console.log('stamp')
})
$(`#troll-btn`).click(()=>{

    currentFunction = new StampTroll (ctx)
    console.log('stamp')
})
$(`#star-btn`).click(()=>{

    currentFunction = new StampStar (ctx)
    console.log('stamp')
})
$(`#emoji-btn`).click(()=>{
    currentFunction = new StampEmoji(ctx)
    console.log('stamp')
})

// currentFunction = new DrawingRectangle (ctx,ctxDraft)

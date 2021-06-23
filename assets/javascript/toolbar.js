// Colour

// Drawing Arc
$('#arc-btn').click(()=>{
    currentFunction = new DrawingArc(ctx,ctxDraft);
    console.log(`Drawing Arc: ${currentFunction}`)
});

// Drawing Brush
$('#brush-btn').click(()=>{
    currentFunction = new DrawingBrush(ctx,ctxDraft);
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

// Fill
$('#fill-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Fill: ${currentFunction}`)
});

// Filter
$('#filter-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Filter: ${currentFunction}`)
});

// Select
$('#select-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Select: ${currentFunction}`)
});

// Text
$('#text-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Text: ${currentFunction}`)
});

// Undo Redo
$('#undo-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Undo: ${currentFunction}`)
});

// Zoom
$('#zoom-btn').click(()=>{
    currentFunction = new (ctx,ctxDraft);
    console.log(`Zoom: ${currentFunction}`)
});

currentFunction = new DrawingRectangle (ctx,ctxDraft)
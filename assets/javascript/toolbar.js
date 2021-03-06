// Label over hover 
$(document).ready(function() {
    $('button').tooltip();
});

// Clear
$('#clear-btn').click(() => {
    clear();
    console.log(`Cleared`)
});

// Drawing Arc
$('#arc-btn').click(() => {
    currentFunction = new DrawingArc(ctx, ctxDraft);
    console.log(`Drawing Arc: ${currentFunction}`)
});

// Drawing smoothBrush
$('#smoothBrush').click(() => {
    currentFunction = new smoothBrush(ctx, ctxDraft);
    console.log(`Drawing Smooth Brush: ${currentFunction}`)
});

$('#shadowBrush').click(() => {
    currentFunction = new shadowBrush(ctx, ctxDraft);
    console.log(`Drawing Drop-shadow Brush: ${currentFunction}`)
});

$('#radialBrush').click(() => {
    currentFunction = new radialBrush(ctx, ctxDraft);
    console.log(`Drawing Radial Gradient Brush: ${currentFunction}`)
});

$('#penBrush').click(() => {
    currentFunction = new penBrush(ctx, ctxDraft);
    console.log(`Drawing Pen Brush: ${currentFunction}`)
});

$('#multipleLineBrush').click(() => {
    currentFunction = new multipleLineBrush(ctx, ctxDraft);
    console.log(`Drawing Multiple-line Brush: ${currentFunction}`)
});

// Drawing Circle
$('#circle-btn').click(() => {
    currentFunction = new DrawingCircle(ctx, ctxDraft);
    console.log(`Drawing Circle: ${currentFunction}`)
});

// Drawing Curve
$('#curve-btn').click(() => {
    currentFunction = new DrawingCurve(ctx, ctxDraft);
    console.log(`Drawing Curve: ${currentFunction}`)
});

// Drawing Line
$('#line-btn').click(() => {
    currentFunction = new DrawingLine (ctx, ctxDraft);
    console.log(`Drawing Line: ${currentFunction}`)
});

// Drawing Regular Polygon
$('#regular-polygon-btn').click(() => {
    currentFunction = new DrawingRegularPolygon(ctx, ctxDraft);
    console.log(`Drawing Regular Polygon: ${currentFunction}`)
});

// Drawing Irregular Polygon
$('#irregular-polygon-btn').click(() => {
    // currentFunction = new DrawingIrregularPolygon(ctx, ctxDraft);
    // console.log(`Drawing Irregular Polygon: ${currentFunction}`)
    alert("Irregular Polygon Function: Coming soon!")
});

// Drawing Rectangle
$('#rectangle-btn').click(() => {
    currentFunction = new DrawingRectangle(ctx, ctxDraft);
    console.log(`Drawing Rectangle: ${currentFunction}`)
});

// Dragger
$('#drag-btn').click(() => {
    MouseTouchTracker()
    console.log(`Drawing Rectangle: ${currentFunction}`)
});

// Eraser
$('#eraser-btn').click(() => {
    currentFunction = new DrawingEraser(ctx);
    console.log(`Eraser: ${currentFunction}`)
});

// Export PNG
$('#export-btnPNG').click(() => {
    downloadPNG()
    console.log(`Export: ${currentFunction}`)
});

// Export JPG
$('#export-btnJPG').click(() => {
    downloadJPG()
    console.log(`Export: ${currentFunction}`)
});

//Fill
$("#fill-btn").click((e) => {
    currentFunction = new Fill(ctx, ctxDraft)
});

// Select
$('#select-btn').click(() => {
    // currentFunction = new Select(ctx, ctxDraft);
    // console.log(`Select: ${currentFunction}`)
    alert("Select Function: Coming soon!")
});

// Text
$('#text-btn').click(() => {
    currentFunction = new DrawingText(ctx, ctxDraft);
    console.log(`Text: ${currentFunction}`)
});

// Undo
$('#undo-btn').click(() => {
    undo();
});

// Redo
$(`#redo-btn`).click(() => {
    redo();
})

// Zoom
$('#zoom-btn').click(() => {
    currentFunction = new(ctx, ctxDraft);
    console.log(`Zoom: ${currentFunction}`)
});


$(`#firebase`).click(() => {
    server();
    console.log(`Server`)
})

$(`#heart-btn`).click(() => {
    currentFunction = new StampHeart(ctx)
    console.log('Heart stamp')
})

$(`#troll-btn`).click(() => {
    currentFunction = new StampTroll(ctx)
    console.log('Troll stamp')
})

$(`#star-btn`).click(() => {
    currentFunction = new StampStar(ctx)
    console.log('Star stamp')
})

$(`#emoji-btn`).click(() => {
    currentFunction = new StampEmoji(ctx)
    console.log('Emoji stamp')
})

// Default Current Function
currentFunction = new smoothBrush(ctx, ctxDraft);
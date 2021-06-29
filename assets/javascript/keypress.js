function KeyPress(e) {
    var evtobj = window.event ? event : e

    //Do action on B
    if (evtobj.key == "b") {
        currentFunction = new smoothBrush(ctx, ctxDraft);
        console.log("B is Pressed");
    }

    //Do action on L
    if (evtobj.key == "l") {
        currentFunction = new DrawingLine(ctx, ctxDraft);
        console.log("L is Pressed");
    }

    //Do action on A
    if (evtobj.key == "a") {
        currentFunction = new DrawingArc(ctx, ctxDraft);
        console.log("A is Pressed");
    }

    //Do action on U
    if (evtobj.key == "u") {
        currentFunction = new DrawingCurve(ctx, ctxDraft);
        console.log("U is Pressed");
    }

    //Do action on C
    if (evtobj.key == "c") {
        currentFunction = new DrawingCircle(ctx, ctxDraft);
        console.log("C is Pressed");
    }

    //Do action on R
    if (evtobj.key == "r") {
        currentFunction = new DrawingRectangle(ctx, ctxDraft);
        console.log("R is Pressed");
    }

    //Do action on P
    if (evtobj.key == "p") {
        currentFunction = new DrawingRegularPolygon(ctx, ctxDraft);
        console.log("P is Pressed");
    }

    //Do action on I
    if (evtobj.key == "i") {
        currentFunction = new DrawingIrregularPolygon(ctx, ctxDraft);
        console.log("I is Pressed");
    }

    //Do action on Q
    if (evtobj.key == "q") {
        currentFunction = new StampEmoji(ctx)
        console.log("Q is Pressed");
    }

    //Do action on T
    if (evtobj.key == "t") {
        currentFunction = new DrawingText(ctx, ctxDraft);
        console.log("T is Pressed");
    }

    //Do action on F
    if (evtobj.key == "f") {
        currentFunction = new Fill(ctx, ctxDraft)
        console.log("F is Pressed");
    }

    //Do action on S
    if (evtobj.key == "s") {
        currentFunction = new Select(ctx, ctxDraft);
        console.log("S is Pressed");
    }

    //Do action on CTRL + Z
    if (evtobj.key == "z" && evtobj.ctrlKey && evtobj.shiftKey == false || evtobj.key == "z" && evtobj.metaKey && evtobj.shiftKey == false) {
        undo()
        console.log("Ctrl + Z is Pressed");
    }

    //Do action on CTRL + Shift + Z
    if (evtobj.key == "z" && evtobj.shiftKey && evtobj.ctrlKey || evtobj.keyCode == 90 && evtobj.shiftKey && evtobj.metaKey) {
        redo()
        console.log("Ctrl + Shift + Z is Pressed");
    }

    //Do action on E
    if (evtobj.key == "e") {
        currentFunction = new DrawingEraser(ctx);
        console.log("E is Pressed");
    }

    //Do action on Ctrl + X
    if (evtobj.key == "x" && evtobj.ctrlKey || evtobj.key == "x" && evtobj.metaKey) {
        clear();
        console.log("Ctrl + X is Pressed");
    }

    //Do action on Ctrl + U
    if (evtobj.key == "u" && evtobj.ctrlKey || evtobj.key == "u" && evtobj.metaKey) {
        $("#upload").trigger("click")
        console.log("Ctrl + U is Pressed");
    }

    //Do action on Ctrl + F
    if (evtobj.key == "f" && evtobj.ctrlKey || evtobj.key == "f" && evtobj.metaKey) {
        $("#upload").trigger("click")
        console.log("Ctrl + F is Pressed");
    }

    //Do action on Ctrl + E
    if (evtobj.key == "e" && evtobj.ctrlKey || evtobj.key == "e" && evtobj.metaKey) {
        server();
        console.log("Ctrl + E is Pressed");
    }
}

document.onkeydown = KeyPress;b
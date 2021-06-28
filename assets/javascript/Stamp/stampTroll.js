class StampTroll extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var trollimg = new Image();
        trollimg.src = "assets/images/troll.png"; //set the link
        this.ctx.drawImage(trollimg, coord[0], coord[1], trollimg.width / 4, trollimg.height / 4);
        console.log("stamp");


    }
}
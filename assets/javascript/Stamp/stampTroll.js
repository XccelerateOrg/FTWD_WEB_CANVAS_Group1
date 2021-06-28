class StampTroll extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var trollimg = new Image();
        trollimg.src = "http://www.redspiderfish.com/skoolprojects/aid/img/angry_troll_face.png"; //set the link
        this.ctx.drawImage(trollimg, coord[0], coord[1]);
        console.log("stamp");


    }
}
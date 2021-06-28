class StampStar extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        console.log(`work`)
        var star = new Image();
        star.src = "assets/images/—Pngtree—star cartoon cartoon stars icon_4001080.png" //set the link
        this.ctx.drawImage(star, coord[0], coord[1], star.width / 8, star.height / 8);
        console.log("stamp");
    }
}
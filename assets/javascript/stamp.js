class StampEmoji extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var emoji = new Image();
        emoji.src = "./assets/images/smile.png" //set the link
        this.ctx.drawImage(emoji, coord[0], coord[1]);
        console.log("Emoji stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampHeart extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var heart = new Image();
        heart.src = "./assets/images/heart.png" //set the link
        this.ctx.drawImage(heart, coord[0], coord[1]);
        console.log("Heart stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampStar extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        console.log(`work`)
        var star = new Image();
        star.src = "./assets/images/star.png" //set the link
        this.ctx.drawImage(star, coord[0], coord[1], star.width / 8, star.height / 8);
        console.log("Star stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampTroll extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var trollimg = new Image();
        trollimg.src = "./assets/images/troll.png"; //set the link
        this.ctx.drawImage(trollimg, coord[0], coord[1]);
        console.log("Troll stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}
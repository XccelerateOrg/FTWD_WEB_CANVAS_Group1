const canvas = $("#canvas")[0];
const canvasDraft = $(`#canvasDraft`)[0];
const ctx = canvas.getContext(`2d`);
const ctxDraft = canvasDraft.getContext(`2d`);

let restoreArray = [];
let reIndex = -1;
let redoArray = [];
let index = -1;

let currentFunction;

let dragging = false;

let fontFam = "Georgia, serif";
let fontSize = "90px";

let isDrawing = false;
let resetDrawing = false;
let fillStyle = false;
let regularFix = false;
let centerFix = false;

function resizeCanvas() {
  canvas.width = $("#canvas-container").width();
  canvas.height = $("#canvas-container").height();
}
function resizeCanvasDraft() {
  canvasDraft.width = $("#canvas-container").width();
  canvasDraft.height = $("#canvas-container").height();
}
resizeCanvas();
resizeCanvasDraft();

window.addEventListener("resize", function () {
  restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  index += 1; 
  // function resizeCanvas() {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // }
  // function resizeCanvasDraft() {
  //   canvasDraft.width = window.innerWidth;
  //   canvasDraft.height = window.innerHeight;
  // }
  resizeCanvas();
  resizeCanvasDraft();
  undo()
});


$(`#canvasDraft`).mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  console.log([mouseX, mouseY]);
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$(`#canvasDraft`).mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$(`#canvasDraft`).mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$(`#canvasDraft`).mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$(`#canvasDraft`).mouseenter(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseUp() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}











// //  Selection
// // holds all our rectangles
// var boxes = []; 
 
// // New, holds the 8 tiny boxes that will be our selection handles
// // the selection handles will be in this order:
// // 0  1  2
// // 3     4
// // 5  6  7
// var selectionHandles = [];

// //Box object to hold data for all drawn rects
// function Box() {
//   this.x = 0;
//   this.y = 0;
//   this.w = 1; // default width and height?
//   this.h = 1;
//   this.fill = '#444444';
// }
 
// //Initialize a new Box, add it, and invalidate the canvas
// // function addRect(x, y, w, h, fill) {
// //   var rect = new Box;
// //   rect.x = x;
// //   rect.y = y;
// //   rect.w = w
// //   rect.h = h;
// //   rect.fill = fill;
// //   boxes.push(rect);
// //   invalidate();
// // }

// var WIDTH;
// var HEIGHT;
// var INTERVAL = 20;  // how often, in milliseconds, we check to see if a redraw is needed
 
// var isDrag = false;
// var isResizeDrag = false;
// var expectResize = -1; // New, will save the # of the selection handle if the mouse is over one.
// // var mx, my; // mouse coordinates
 
//  // when set to true, the canvas will redraw everything
//  // invalidate() just sets this to false right now
//  // we want to call invalidate() whenever we make a change
// var canvasValid = false;
 
// // The node (if any) being selected.
// // If in the future we want to select multiple objects, this will get turned into an array
// var mySel; 
 
// // The selection color and width. Right now we have a red selection with a small width
// var mySelColor = '#CC0000';
// var mySelWidth = 2;
 
// // we use a fake canvas to draw individual shapes for selection testing
// var ghostcanvas;
// var gctx; // fake canvas ctx
 
// // since we can drag from anywhere in a node
// // instead of just its x/y corner, we need to save
// // the offset of the mouse when we start dragging.
// var offsetx, offsety;
 
// // Padding and border style widths for mouse offsets
// var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
 
// // initialize our canvas, add a ghost canvas, set draw loop
// // then add everything we want to intially exist on the canvas
// function init() {
//   // canvas = document.getElementById('canvas');
//   HEIGHT = canvas.height;
//   WIDTH = canvas.width;
//   // ctx = canvas.getContext('2d');
//   ghostcanvas = document.createElement('canvas');
//   ghostcanvas.height = HEIGHT;
//   ghostcanvas.width = WIDTH;
//   gctx = ghostcanvas.getContext('2d');
 
//   //fixes a problem where double clicking causes text to get selected on the canvas
  // canvas.onselectstart = function () { return false; }
 
//   // fixes mouse co-ordinate problems when there's a border or padding
//   // see getMouse for more detail
//   if (document.defaultView && document.defaultView.getComputedStyle) {
//     stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
//     stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
//     styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
//     styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
//   }
 
//   // make draw() fire every INTERVAL milliseconds.
//   setInterval(draw, INTERVAL);
 
//   // add our events. Up and down are for dragging,
//   // double click is for making new boxes
//   canvas.onmousedown = myDown;
//   canvas.onmouseup = myUp;
//   // canvas.ondblclick = myDblClick;
 
//   Box.prototype = {
//     // we used to have a solo draw function
//     // but now each box is responsible for its own drawing
//     // mainDraw() will call this with the normal canvas
//     // myDown will call this with the ghost canvas with 'black'
//     draw: function(ctx, optionalColor) {
//         if (ctx === gctx) {
//           ctx.fillStyle = 'black'; // always want black for the ghost canvas
//         } else {
//           ctx.fillStyle = this.fill;
//         }
        
//         // We can skip the drawing of elements that have moved off the screen:
//         if (this.x > WIDTH || this.y > HEIGHT) return; 
//         if (this.x + this.w < 0 || this.y + this.h < 0) return;
        
//         ctx.fillRect(this.x,this.y,this.w,this.h);

//     // draw selection
//     // this is a stroke along the box and also 8 new selection handles
//     if (mySel === this) {
//       context.strokeStyle = mySelColor;
//       context.lineWidth = mySelWidth;
//       context.strokeRect(this.x,this.y,this.w,this.h);
      
//       // draw the boxes
      
//       var half = mySelBoxSize / 2;
      
//       // 0  1  2
//       // 3     4
//       // 5  6  7
      
//       // top left, middle, right
//       selectionHandles[0].x = this.x-half;
//       selectionHandles[0].y = this.y-half;
      
//       selectionHandles[1].x = this.x+this.w/2-half;
//       selectionHandles[1].y = this.y-half;
      
//       selectionHandles[2].x = this.x+this.w-half;
//       selectionHandles[2].y = this.y-half;
      
//       //middle left
//       selectionHandles[3].x = this.x-half;
//       selectionHandles[3].y = this.y+this.h/2-half;
      
//       //middle right
//       selectionHandles[4].x = this.x+this.w-half;
//       selectionHandles[4].y = this.y+this.h/2-half;
      
//       //bottom left, middle, right
//       selectionHandles[6].x = this.x+this.w/2-half;
//       selectionHandles[6].y = this.y+this.h-half;
      
//       selectionHandles[5].x = this.x-half;
//       selectionHandles[5].y = this.y+this.h-half;
      
//       selectionHandles[7].x = this.x+this.w-half;
//       selectionHandles[7].y = this.y+this.h-half;

//       for (var i = 0; i < 8; i ++) {
//         var rect = new Box2;
//         selectionHandles.push(rect);
//       }

//       context.fillStyle = mySelBoxColor;
//       for (var i = 0; i < 8; i ++) {
//         var cur = selectionHandles[i];
//         context.fillRect(cur.x, cur.y, mySelBoxSize, mySelBoxSize);
//       }
//     }
    
//   } // end draw











// Color Pickr
const pickrConfig = {
  theme: "classic",

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true,
    },
  },
};
const pickrFill = Pickr.create({
  el: "#colorFill",
  ...pickrConfig,
});

const pickrStroke = Pickr.create({
  el: "#colorStroke",
  ...pickrConfig,
});

const pickrBackground = Pickr.create({
  el: "#colorBackground",
  ...pickrConfig,
});

// Canvas setting
let canvasSettings = {
  colorBackground: "#FFFFFF",
  colorStroke: "#000000",
  colorFill: "#000000",
  colorFillArray: [],
  colorHex: [],
  colorHex1: "",
  strokeSize: 10,
  polygonSides: 3,
  textFont: "Arial",
  textSize: "18",
  fontWeight: "normal",
  fontStyle: "normal"
};

pickrFill.on("save", (color, instance) => {
  console.log('Event: "save"', color, instance);
  console.log(`color 2string`, color.toRGBA().toString(3));
  console.log(`toRGBA`, color.toRGBA());
  console.log(`toHex`, color.toHEXA());
  console.log(`basic color`, color);
  canvasSettings.colorFill = color.toRGBA().toString(3);
  canvasSettings.colorFillArray = color.toRGBA();
  canvasSettings.colorHex = color.toHEXA();
  function colorToHex() {
    canvasSettings.colorHex1 =
      `0xFF` +
      canvasSettings.colorHex[2] +
      canvasSettings.colorHex[1] +
      canvasSettings.colorHex[0];
  }
  colorToHex();
});

pickrStroke.on("save", (color, instance) => {
  console.log('Event: "save"', color, instance);
  console.log(color.toRGBA().toString(3));
  canvasSettings.colorStroke = color.toRGBA().toString(3);
});

pickrBackground.on("save", (color, instance) => {
  console.log('Event: "save"', color, instance);
  console.log(color.toRGBA().toString(3));
  canvasSettings.colorBackground = color.toRGBA().toString(3);
  ctx.fillStyle = canvasSettings.colorBackground;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  index += 1;
});

$("#pen-range").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.strokeSize = $(e.target).val();
});

$("#sides-no").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.polygonSides = $(e.target).val();
});

$("#text-font").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.textFont = $(e.target).val();
});

$("#text-size").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.textSize = $(e.target).val();
});

$("#font-weight").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.fontWeight = $(e.target).val();
});

$("#font-style").on("change", (e) => {
  console.log($(e.target).val());
  canvasSettings.fontStyle = $(e.target).val();
});

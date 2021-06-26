const canvas = $("#canvas")[0];
//set a var to the targeted id
//this retrieves the node in the DOM representing the <canvas>
const canvasDraft = $(`#canvasDraft`)[0];
//set a var to the targeted id
const ctx = canvas.getContext(`2d`);
//set the rendering to 2d
//used to obtain the rendering context and its drawing functions
const ctxDraft = canvasDraft.getContext(`2d`);
//set the rendering to 2d

let restoreArray = [];
let reIndex = -1;
let redoArray = [];
let index = -1;

let currentFunction;
//set a currentFunction for later use in eventListner

let dragging = false;
//default dragging to false, when mouseDown, start to drag

let fontFam = "Georgia, serif";
let fontSize = "90px";

function resizeCanvas() {
  canvas.width = 1800;
  canvas.height = 800;
}
//canvas can only be resized through js or (inline??), css effect the coord system
function resizeCanvasDraft() {
  canvasDraft.width = 1800;
  canvasDraft.height = 800;
}

resizeCanvas();
resizeCanvasDraft();
//canvas can only be resized through js or (inline??)

$(`#canvasDraft`).mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  console.log([mouseX, mouseY]);
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});
//when user click, take the current coord of the cursor ,
//and input the coord into an array and set as para for later use in modules
//change the drag status to true

$(`#canvasDraft`).mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});
//when the cursor moves, keep recording the X,Y of the cursor,
//if the dragging is on (w/ combination of mousedown)
//set X,Y as para for later use in modules

$(`#canvasDraft`).mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});
//when user let go of mouse, set X,Y as para for function

$(`#canvasDraft`).mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});
//noone cares

$(`#canvasDraft`).mouseenter(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});
//noone cares

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseUp() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
//create a main object for all paint function,
//with all possible interactions with the drawing functions as methods

// color pickr
const pickrConfig = {
  theme: "classic", // or 'monolith', or 'nano'

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
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
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

// canvas setting
let canvasSettings = {
  colorBackground: "#FFFFFF",
  colorStroke: "#000000",
  colorFill: "#000000",
  colorFillArray: [],
  colorHex: [],
  colorHex1: "", 
  strokeSize: 10,
  // textSize:
  polygonSides: 3,
};

pickrFill.on("save", (color, instance) => {
  console.log('Event: "save"', color, instance);
  console.log(`color 2string`, color.toRGBA().toString(3));
  console.log(`toRGBA`, color.toRGBA());
  console.log(`toHex`, color.toHEXA());
  console.log(`basic color`, color)
  canvasSettings.colorFill = color.toRGBA().toString(3);
  canvasSettings.colorFillArray = color.toRGBA();
  canvasSettings.colorHex = color.toHEXA();
  console.log(canvasSettings.colorHex)
  console.log(canvasSettings.colorFillArray);
  function colorToHex(){
    canvasSettings.colorHex1 = `0xFF` + canvasSettings.colorHex[2] + canvasSettings.colorHex[1] + canvasSettings.colorHex[0]
  }
  colorToHex()
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
  canvasSettings.strokeSize = $(e.target).val();
});
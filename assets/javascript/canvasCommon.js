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
  canvas.width = window.innerWidth;
  canvas.height = 800;
}
function resizeCanvasDraft() {
  canvasDraft.width = window.innerWidth;
  canvasDraft.height = 800;
}
resizeCanvas();
resizeCanvasDraft();

window.addEventListener("resize", function () {
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 800;
  }
  function resizeCanvasDraft() {
    canvasDraft.width = window.innerWidth;
    canvasDraft.height = 800;
  }
  resizeCanvas();
  resizeCanvasDraft();
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

// canvas setting
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

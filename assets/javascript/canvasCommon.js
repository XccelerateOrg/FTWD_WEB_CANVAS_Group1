const canvas = $('#canvas')[0];
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
let restoreIndex = -1;
let drawColor = "#a3d4f2"

let currentFunction;
//set a currentFunction for later use in eventListner

let dragging = false;
//default dragging to false, when mouseDown, start to drag

let fontFam = "Georgia, serif";
let fontSize = "90px";

function resizeCanvas(){
    canvas.width = 2000;
    canvas.height = 800;
}
//canvas can only be resized through js or (inline??), css effect the coord system
function resizeCanvasDraft(){
    canvasDraft.width = 2000;
    canvasDraft.height = 800;
}
resizeCanvas();
resizeCanvasDraft();
//canvas can only be resized through js or (inline??)


$(`#canvasDraft`).mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    console.log([mouseX,mouseY])
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});
//when user click, take the current coord of the cursor ,
//and input the coord into an array and set as para for later use in modules
//change the drag status to true


$(`#canvasDraft`).mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});
//when the cursor moves, keep recording the X,Y of the cursor,
//if the dragging is on (w/ combination of mousedown)
//set X,Y as para for later use in modules


$(`#canvasDraft`).mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});
//when user let go of mouse, set X,Y as para for function


$(`#canvasDraft`).mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});
//noone cares


$(`#canvasDraft`).mouseenter(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});
//noone cares

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseUp(){}
    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}
}
//create a main object for all paint function, 
//with all possible interactions with the drawing functions as methods

// Utilities
let canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  strokeSize: $("#stroke-size").val(),
  textSize: $("#text-size").val(),
  polygonSides: $("#poly-sides").val(),
};

$("#stroke-color")[0].oninput = function () {
    canvasSettings.colorStroke = this.value;
    document.documentElement.style.setProperty("--color", this.value);
  };
  
  $("#fill-color")[0].oninput = function () {
    canvasSettings.colorFill = this.value;
  };
  
  $("#stroke-size")[0].oninput = function () {
    canvasSettings.strokeSize = this.value;
  };
  
  $("#poly-sides")[0].oninput = function () {
    canvasSettings.polygonSides = this.value;
  };
  
  $("#text-size")[0].oninput = function () {
    canvasSettings.textSize = this.value;
  };

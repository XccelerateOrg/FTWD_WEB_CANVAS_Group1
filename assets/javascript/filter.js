let filterValue = ""

$("#blurFilter").click(function () {
    console.log(`blur firing`)
    var blurValue = prompt("Blurness (1-10px)", "10")
    filterValue += ` blur(${blurValue}px)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add brightness
$("#brightnessFilter").click(function () {
    console.log(`Brightness firing`)
    var brightnessValue = prompt("Blurness (1-100%)", "100")
    filterValue += ` brightness(${brightnessValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add contrast
$("#contrastFilter").click(function () {
    console.log(`Contrast firing`)
    var contrastValue = prompt("Contrast (1-100%)", "100")
    filterValue += ` contrast(${contrastValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add drop shadow
$("#dropShadowFilter").click(function () {
    console.log(`Drop Shadow firing`)
    var dropShadowValue = prompt("Drop shadow (1-100%)", "100")
    filterValue += ` drop-shadow(${dropShadowValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add grayscale
$("#grayscaleFilter").click(function () {
    console.log(`Gray Scale firing`)
    var grayValue = prompt("Gray Scale (1-100%)", "100")
    filterValue += ` grayscale(${grayValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add hue rotate 
$("#hueFilter").click(function () {
    console.log(`Hue Rotate firing`)
    var hueValue = prompt("Hue Rotate (1-360deg)", "90")
    filterValue += ` hue-rotate(${hueValue}deg)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add opacity 
$("#opacityFilter").click(function () {
    console.log(`Opacity firing`)
    var opacityValue = prompt("Opacity (1-100%)", "100")
    filterValue += ` opacity(${opacityValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add invert 
$("#invertFilter").click(function () {
    console.log(`Invert firing`)
    var invertValue = prompt("Invert (1-100%)", "100")
    filterValue += ` invert(${invertValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add saturate 
$("#satuateFilter").click(function () {
    console.log(`Satuation firing`)
    var satuateValue = prompt("Satuation (1-100%)", "100")
    filterValue += ` satuate(${satuateValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// add speia 
$("#sepiaFilter").click(function () {
    console.log(`Sepia firing`)
    var sepiaValue = prompt("Sepia (1-100%)", "100")
    filterValue += ` sepia(${sepiaValue}%)`
    console.log(filterValue)
    ctx.canvas.style.filter = (filterValue)
})

// clear Filter 
$("#clearFilter").click(function () {
    console.log(`Clear Filter firing`)
    if (confirm("The current filter will be removed.")) {
        filterValue = "none"
        ctx.canvas.style.filter = (filterValue)
    } else {
        // Do nothing!
        console.log("The filter is not removed.")
    }
})
function downloadPNG() {
    var download = document.getElementById("export-btnPNG");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

function downloadJPG() {
    var download = document.getElementById("export-btnJPG");
    var image = document.getElementById("canvas").toDataURL("image/jpg")
        .replace("image/jpg", "image/octet-stream");
    download.setAttribute("href", image);
}
var imageLoader = document.getElementById("upload");
imageLoader.addEventListener("change", handleImage, false);

function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      var uploadimg = new Image();
      uploadimg.onload = function(){
          canvas.width = uploadimg.width;
          canvas.height = uploadimg.height;
          ctx.drawImage(uploadimg,0,0);
      }
      uploadimg.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);     
}

$("#upload-btn").click(function () {
  $("#upload").trigger("click");
  console.log("File Loader is triggered")
});

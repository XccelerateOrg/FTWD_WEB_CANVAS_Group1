var firebaseConfig = {
    apiKey: "AIzaSyACVTFK8ukHuEgG_6K_UAiUuHvdo_yuz-s",
    authDomain: "canvas-6159c.firebaseapp.com",
    databaseURL: "https://canvas-6159c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "canvas-6159c",
    storageBucket: "canvas-6159c.appspot.com",
    messagingSenderId: "224009110814",
    appId: "1:224009110814:web:8eceb01e9516fa180fb50f",
    measurementId: "G-97P8P95VYV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var storage = firebase.storage();

function server() {
    
    let blob;
    canvas.toBlob(function (blob) {
        var image = new Image();
        image.src = blob;
        // url = URL.createObjectURL(blob);
        var uploadTask = storageRef.child('images/' + "canvas" + new Date().getTime() + '.png').put(blob);
    });
    
    var storageRef = firebase.storage().ref();
    var canvasRef = storageRef.child(`canvas.png`);
    var uploadTask = storageRef.child(`images/canvas.png`).put(blob);
    
    // canvas.toBlob(function(blob) {
    //     var newImg = document.createElement('img'),
    //          url = URL.createObjectURL(blob);

    //     newImg.onload = function() {
    //       // no longer need to read the blob so it's revoked
    //       URL.revokeObjectURL(url);
    //     };

    //     newImg.src = url;
    // document.body.appendChild(newImg);
    
    uploadTask.on('state_changed',  (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
    },  (error) => {
        // Handle unsuccessful uploads
        console.log("error");
    },  () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log(uploadTask);
        console.log(uploadTask.snapshot);
        console.log('File available at', downloadURL);

        storageRef.child('images/canvas.png').getDownloadURL()
  .then((url) => {
      console.log(url);
      alert('File available at', url);
      
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    var img = document.getElementById('canvas');
    img.setAttribute('href', image);
  })
  .catch((error) => {
    // Handle any errors
  });
  
});
};


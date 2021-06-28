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
        var uploadTask = storageRef.child('images/' + "canvas" + new Date().getTime() + '.png').put(blob);
    });
 
    var storageRef = firebase.storage().ref();

    alert("Your File Is Available On Firebase");
};
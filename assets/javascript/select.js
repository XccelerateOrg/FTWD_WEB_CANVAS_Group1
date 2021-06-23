// const canvas = new Canvas('canvas', 500, 500);

// let image = new Image();
// image.src = 'https://dummyimage.com/100x100/000/fff';

// let moveImage = false;

// image.onload = function () {

//   image = {
//     image: image,
//     x: canvas.width / 2 - image.width / 2, // centered in canvas
//     y: canvas.height / 2 - image.height / 2 // centered in canvas
//   };

//   canvas.on('draw', function ( renderer ) {
// 		renderer.clear();
//     renderer.drawImage(image.image, image.x, image.y);
//   });

//   const pointer = new Pointer( canvas.element );

//   pointer.on('move', function ( event ) {

//     if(moveImage) {

//       image.x += (event.x - pointer.getMoveHistory(-2).x);
//       image.y += (event.y - pointer.getMoveHistory(-2).y);

//     }

//   });

//   pointer.on('down', function () {
//     moveImage = pointer.touches({ x: image.x, y: image.y, width: image.image.width, height: image.image.height });
//   });

//   pointer.on('up', function () {
//     moveImage = false;
//   });

//   canvas.start();

// };
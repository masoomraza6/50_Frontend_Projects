// const canvas = document.querySelector('#canvas');
// const increaseBtn = document.querySelector('#increase');
// const decreaseBtn = document.querySelector('#decrease');
// const sizeEl = document.querySelector('#size');
// const colorE1 = document.querySelector('#color');
// const clearE1 = document.querySelector('#clear');

// const context = canvas.getContext('2d');

// let size = 10;
// let isPressed = false;
// // colorE1.value = 'black';
// color = colorE1.value;

// let x;
// let y;

// canvas.addEventListener('mousedown', (e)=>{
//     isPressed = true;

//     x = e.offsetX;
//     y = e.offsetY;
// });

// canvas.addEventListener('mouseup', (e)=>{
//     isPressed = false;

//     x = undefined;
//     y = undefined;
// });

// canvas.addEventListener('mousemove', (e)=>{

//     if(isPressed){
//         const x2 = e.offsetX;
//         const y2 = e.offsetY;

//         drawCircle(x2, y2);
//         drawline(x, y, x2, y2);

//         x = x2;
//         y = y2;
//     }
// });

// function drawCircle(x, y){
//     context.beginPath();
//     context.arc(x, y, size, 0, Math.PI * 2);
//     context.fillStyle = color;
//     context.fill();
// }

// function drawline(x1, y1, x2, y2){
//     context.beginPath();
//     context.moveTo(x1, y1);
//     context.lineTo(x2, y2);
//     context.strokeStyle = color;
//     context.lineWidth = size * 2;
//     context.stroke();
// }

// function updateSizeOnScreen(){
//     sizeEl.innerText = size;
// }

// increaseBtn.addEventListener('click', ()=>{
//     size += 5;

//     if(size > 50){
//         size = 50;
//     }
//     updateSizeOnScreen();
// })

// decreaseBtn.addEventListener('click', ()=>{
//     size -= 5;

//     if(size < 5){
//         size = 5;
//     }
//     updateSizeOnScreen();
// });

// colorE1.addEventListener('change', (e)=> color = e.target.value);

// clearE1.addEventListener('click', ()=> context.clearRect(0, 0, canvas.width, canvas.height));


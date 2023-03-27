const progressBar = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// let widthInt = 0;
// let circleInt = 0;

// prev.addEventListener('click', ()=>{
//     // prev.classList.remove('disabled');
//     widthInt -= 33;
//     circleInt -= 1;
//     console.log(circle[circleInt]);
//     // if(circleInt > 5){
//         circle[circleInt+1].classList.remove('active');
//     // }
    
//     if(widthInt >= 100){
//         widthInt = 100 - 33;
//     }
//     if(widthInt >= 0){
//         progressBar.style = `width: ${widthInt}%`;
//     }
// });

// next.addEventListener('click', ()=>{
//     widthInt += 33;
//     circleInt += 1;
//     // console.log(widthInt);
//     if(circleInt < 4){
//         next.style = 'background-color: #3498db';
//         circle[circleInt].classList.add('active');
//     }
//     if(circleInt > 2){
//         prev.style = 'background-color: #3498db';
//         next.style = 'background-color: #e0e0e0'
//     }
//     if(widthInt <= 100){
//         progressBar.style = `width: ${widthInt}%`;
//     };
//     if(widthInt <= 0){
//         widthInt = 0;
//     }

// });
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', ()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, i)=>{
        if(i < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    
    progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive == 1){
        prev.disabled = true
    }else{
        prev.disabled = false;
    }
    if(currentActive == circles.length){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
};

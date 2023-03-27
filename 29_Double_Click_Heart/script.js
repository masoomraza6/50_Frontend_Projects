const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timeCal = 0;
let timeCount = 0;

loveMe.addEventListener('click', (e) => {

    if(timeCal === 0){
        timeCal = new Date().getTime();

    }else {
        if((timeCal - new Date().getTime()) < 800){
            createHeart(e);
            timeCal = 0;
        } else {
            timeCal = new Date().getTime();
        }

    }
});

function createHeart(e){
    
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const yInside = y - topOffset;
    const xInside = x - leftOffset;

    heart.style.top = yInside + 'px';
    heart.style.left = xInside + 'px';
    loveMe.appendChild(heart);

    times.innerHTML = ++timeCount;

    setTimeout(() => {
        heart.remove();
    }, 1000);
    
}
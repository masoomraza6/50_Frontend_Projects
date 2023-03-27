const sliderContainer = document.querySelector('.slide-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const down = document.querySelector('#prev');
const up = document.querySelector('#next');
const slideLength = leftSlide.querySelectorAll('div').length;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

let currentSlide = 0;

up.addEventListener('click', ()=> changeSlide('up'));
down.addEventListener('click', ()=> changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if(direction === 'up'){
        currentSlide++;
        if(currentSlide > slideLength - 1){
            currentSlide = 0;
        }
    }else if(direction === 'down'){
        currentSlide--;
        if(currentSlide < 0){
            currentSlide = slideLength - 1;
        }
    }

    leftSlide.style.transform = `translateY(${currentSlide * sliderHeight}px)`;
    rightSlide.style.transform = `translateY(-${currentSlide * sliderHeight}px)`;

    console.log();
};
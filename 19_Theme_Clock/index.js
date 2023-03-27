const hourE1 = document.querySelector('.hour');
const minE1 = document.querySelector('.min');
const secE1 = document.querySelector('.sec');
const timeE1 = document.querySelector('.time');
const dateE1 = document.querySelector('.date');
const toggle = document.querySelector('#toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", 'Aug', 'Sep', 'Nov', "Dec"];

toggle.addEventListener('click', ()=>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
    }else{
        html.classList.add('dark');
    }
});

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hourForClock = hour >= 13 ? hour % 12 : hour;
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hourE1.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 12, 0, 360)}deg)`;
    minE1.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 60, 0, 360)}deg)`;
    secE1.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 60, 0, 360)}deg)`;
};

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return num * (out_max / in_max);
}
setTime();

setInterval(setTime, 1000);
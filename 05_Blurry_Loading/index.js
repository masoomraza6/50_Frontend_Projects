const bg = document.querySelector('.bg');
const loadingText = document.querySelector('#loading-text');
let val = 0;



const timer = setInterval(run, 10);

function run() {
    val++;

    loadingText.innerHTML = `${val}%`;
    loadingText.style.opacity = scale(val, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(val, 0, 100, 30, 0)}px)`;

    if (val >= 100) {
        clearInterval(timer);
        val = 0;
    }
};
const scale = (num, in_min, in_max, out_min, out_max)=>{
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_max);
}